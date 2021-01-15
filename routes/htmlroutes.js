const router = require("express").Router();
const path = require("path");

// get exercises
router.get("/exercise",(req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// get stats
router.get("/stats",(req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router; 