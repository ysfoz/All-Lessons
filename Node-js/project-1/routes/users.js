var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', userController.get_users);
router.get('/add',userController.show_add_user_form)

router.post('/add', userController.add_user)

router.get('/:id/delete',userController.delete_user)

router.get("/:id/:firstName/:lastName/edit", userController.show_edit_user_form)
router.post("/:id/:firstName/:lastName/edit", userController.edit_user)
module.exports = router;
