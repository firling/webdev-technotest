const router = require("express").Router();

const { test } = require("../controllers/main");
router.get('/test', test);

module.exports = router;