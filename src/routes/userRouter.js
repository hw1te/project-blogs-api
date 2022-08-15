const { Router } = require('express');

const router = Router();
const userController = require('../controllers/userController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

router.post('/', userController.create);
router.get('/', tokenMiddleware.validateToken, userController.getUsers);
router.get('/:id', tokenMiddleware.validateToken, userController.getById);

module.exports = router;
