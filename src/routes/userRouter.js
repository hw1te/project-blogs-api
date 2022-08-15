const { Router } = require('express');

const router = Router();
const userController = require('../controllers/userController');

router.post('/', userController.create);
router.get('/', userController.validateToken, userController.getUsers);

module.exports = router;
