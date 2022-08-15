const { Router } = require('express');

const router = Router();
const categoryController = require('../controllers/categoryController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

router.post('/', tokenMiddleware.validateToken, categoryController.create);

module.exports = router;
