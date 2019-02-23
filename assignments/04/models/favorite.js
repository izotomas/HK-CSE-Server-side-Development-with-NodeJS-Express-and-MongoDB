const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const favoriteSchema = new Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        dishes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dish'
        }]
    },
    {
        timestamps: true
    }),

    Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;
