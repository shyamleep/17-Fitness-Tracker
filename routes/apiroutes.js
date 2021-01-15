const router = require("express").Router();
const Workouts = require("../models/workouts");

router.post("/api/workouts", (req, res) => {
    Workouts.find()
})