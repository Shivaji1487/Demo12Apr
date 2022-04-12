var express = require('express');
var router = express.Router();
const {getAll}=require('../controllers/users.controllers')
let middelware= require('../middelware/jwt.middelware');

/* GET users listing. */

router.get('/',getAll);
router.post('/',getAll);
module.exports = router;
