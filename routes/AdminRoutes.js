const express = require("express");
const adminTrx = require('../controller/admin')
const validate = require('../middleware/validator')

const router = express.Router();

router.get('/users', validate.authenticateAdmin, adminTrx.getAllUsers)
router.patch('/users/:id', validate.authenticateAdmin, adminTrx.updateStatusUser)
router.delete('/users/:id', validate.authenticateAdmin, adminTrx.deleteUsers)
router.post('/__/register', validate.authenticateAdmin, adminTrx.createAdmin)

//hardcode admin user


module.exports = router;