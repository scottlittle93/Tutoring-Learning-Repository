const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        fruit: "orange",
        dog: "Gilly"
    });
});

router.get("/testtwo", (req, res) => {
res.json({
    key1: "value1",
    key2: "value2"
});
});


//Remember to change to "PUT" inside Postman
router.put("/testput", (req, res) => {
    res.json({
        key1: "put value response 1",
        key2: "put value response 2"
    });
});

router.post("/testpost", (req, res) => {
    res.json({
        key1: "post #1",
        key2: "post #2"
    });
});

module.exports = router;

//Question for Ryan - are each of these considered a route, or is the whole file a "route"? 