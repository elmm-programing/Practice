const express = require('express');
const router = express.Router();
const cont = require('../controllers/user.controllers') ;

router.get("/",cont.getUsers);
router.post("/",cont.createUsers);
router.delete("/",cont.deleteUsers);
router.put("/",cont.updateUsers);

module.exports = router;

