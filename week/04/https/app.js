// required packages
const createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    passport = require('passport');

// routes
var config = require('./config'),
    indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users'),
    dishRouter = require('./routes/dishRouter'),
    promoRouter = require('./routes/promoRouter'),
    leaderRouter = require('./routes/leaderRouter');

// connect to database
mongoose.set('useCreateIndex', true);
const connect = mongoose.connect(config.mongoUrl, { useNewUrlParser: true });

connect.then((db) => {
    console.log('Connected correctly to server');
}, (err) => { console.log(err); });

var app = express();

// Secure traffic only
app.all('*', (req, res, next) => {
    if (req.secure) {
        return next();
    }
    else {
        res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
