const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
request({uri: 'https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/README.md'},(error, response, body) => {
    console.log(body);
});


var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});