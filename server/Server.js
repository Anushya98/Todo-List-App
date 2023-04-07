const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const PORT = 5000;
const routes = require("./routes/ToDoRoute");

const app = express();
//const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect('mongodb+srv://todoadmin:VzrIEc1en5eUZb9w@cluster0.fu8lmvm.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));