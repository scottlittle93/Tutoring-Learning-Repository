const express = require("express");
const bodyParser = require("body-parser");

const testRoute = require("./routes/Test")

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//Routes go here
//first argument is destination for where to put the contents (URL, postman), second argument is what content to put there
//first argument sets the URL for the route, second argument is the contents of the route. But the overall URL will be the first argument + any additional URL "/" stuff that is found in the contents of the route.

app.use("/", testRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}.`));

