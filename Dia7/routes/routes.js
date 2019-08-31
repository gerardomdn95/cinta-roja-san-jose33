const express = require("express");
const router = express.Router();

const { Movie } = require("../models/movie");

router.get("/", (req, res) => {
    res.send("Server arriba");
})

// CRUD

// CREATE

router.post("/api/v1/movie", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// READ
// UPDATE
// DELETE

module.exports = { router };