const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Schema of the track info
const infoSchema = new Schema({
    car: {
        type: String,
        required: true,
        default: "null"
    },
    lapTime: {
        type: Number,
        required: true,
        default: 999
    },
    gameTimes: {
        type: Number,
        required: true,
        default: 0
    }  
})

//Schema of the user
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            minLength: 5,
            trim: true,
            required: true
        },
        track1Stats: {
            name: {
                type: String,
                default: "Savannah"
            },
            details: {
                type: infoSchema,
                required: true
            }
        },
        track2Stats: {
            name: {
                type: String,
                default: "Mountains"
            },
            details: {
                type: infoSchema,
                required: true
            }
        },
        track3Stats: {
            name: {
                type: String,
                default: "City"
            },
            details: {
                type: infoSchema,
                required: true
            }
        }
    }
);

const User = mongoose.model("User", userSchema)

module.exports = User
