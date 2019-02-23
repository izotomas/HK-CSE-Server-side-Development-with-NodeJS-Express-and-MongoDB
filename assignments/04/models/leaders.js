const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const leaderSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        },
        abbr: {
            type: String,
            required: false,
            default: ''
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
    }),

    Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;
