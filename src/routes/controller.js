const db = require('../config/db');


module.exports.HelloWorld = function (req, res) {
    res.send("Hello,World");
};


module.exports.postHelloWorld = function (req, res) {

    res.json({
        success: true,
        message: "Hello,World"
    });
};