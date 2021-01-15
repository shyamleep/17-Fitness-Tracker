const router = require("express").Router();
const Workouts = require("../models/workouts");

// add new workout plan and new exercises to it
// has to be an object
router.post("/api/workouts", (req, res) => {
    Workouts.create({}).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err)
    })
});

// add a new exercises to old workout plan
router.put("api/workouts/:id", (req,res) => {
    Workouts.findByIdAndUpdate(req.params.id, 
        {$push: {exercises: req.body}},
        {new: true, runValidators: true})
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err)
        })
});

// view weight data on stats page
router.get("api/workouts/range", (req, res) => {
    Workouts.find({}).limit(7).then(data => {
        res.json(data);
        }).catch(err => {
            res.json(err)
        })
});

module.exports = router;