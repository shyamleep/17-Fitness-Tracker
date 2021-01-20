const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    day: {type: Date, default: Date.now},
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true,
        },
        name: {
            type: String,
            trim: true, 
            required: true,
        },
        duration: {
            type: Number
        },
        weight: {
            type:Number
        },
        reps: {
            type: Number
        },
        sets: {
            type:Number
        },
        distance: {
            type: Number
        },
    }]
});

const Workouts =  mongoose.model("Workouts", workoutSchema)
module.exports = Workouts