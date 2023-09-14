const router = require('express').Router();
const controller = require("./controller");


router.get("/", controller.HelloWorld);
router.post("/", controller.postHelloWorld);


module.exports = router;