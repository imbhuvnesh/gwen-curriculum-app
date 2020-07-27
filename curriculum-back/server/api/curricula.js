const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Curricula");
});

router.post("/", (req, res) => {
  res.send("POST");
});

router.get("/:id", (req, res) => {
  res.send(req.params);
});

router.patch("/:id", (req, res) => {
  res.send("PATCH");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE ");
});

module.exports = router;