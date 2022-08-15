const { Router } = require('express');

const router = Router();
const categoryController = require('../controllers/categoryController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

router.post('/', tokenMiddleware.validateToken, categoryController.create);
router.get('/', tokenMiddleware.validateToken, categoryController.getCategories);

module.exports = router;
