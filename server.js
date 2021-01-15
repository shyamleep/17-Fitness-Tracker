const express = require("express");
const mongoose = require("mongoose");
const app = express();
const logger = require("morgan");
const db = "workouts_db";
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use(logger("dev"));

app.use(require("./routes/apiroutes"));
app.use(require("./routes/htmlroutes"));

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
});