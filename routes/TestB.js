const express = require("express");
const router = express.Router();

router.get("/yyy", (req, res) => {
    res.json({
        key1: "value1",
        key2: "value2"
    });
});

module.exports = router;

