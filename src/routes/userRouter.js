const { Router } = require('express');

const router = Router();
const userController = require('../controllers/userController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

router.get('/', tokenMiddleware.validateToken, userController.getUsers);
router.get('/:id', tokenMiddleware.validateToken, userController.getById);
router.post('/', userController.create);
router.delete('/me', tokenMiddleware.validateToken, userController.delete);

module.exports = router;
