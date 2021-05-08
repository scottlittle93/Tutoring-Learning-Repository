const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        fruit: "orange",
        dog: "Gilly"
    });
});

module.exports = router;

