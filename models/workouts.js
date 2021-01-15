const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    day: {type: Date, default: Date.now},
    exercises: {
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
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
    }
});

module.exports = mongoose.model("workouts", workoutSchema)