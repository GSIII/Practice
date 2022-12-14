var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);

router.get("/test",controller.test);

router.get('/mbtiTest',controller.mbtiTest);

router.post('/test_type', controller.test_type);

router.get('/result',controller.result);

router.get('/loading',controller.loading);


module.exports = router;