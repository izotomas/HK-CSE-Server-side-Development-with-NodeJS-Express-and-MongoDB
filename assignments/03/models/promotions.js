const mongoose = require('mongoose');

var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

const promoSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    image:  {
        type: String,
        required: true
    },
    label:  {
        type: String,
        required: false,
        default: ''
    },
    price: {
        type: Currency,
        required: false, //bug: true throws exception??
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean
    }
},
{
    timestamps: true
});

const Promotions = mongoose.model('Promotion', promoSchema);

module.exports = Promotions;
