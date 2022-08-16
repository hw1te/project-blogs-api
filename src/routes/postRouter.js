const { Router } = require('express');

const router = Router();
const postController = require('../controllers/postController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const postMiddleware = require('../middlewares/postMiddleware');

router.post('/', tokenMiddleware.validateToken, postMiddleware.validateBody,
  postMiddleware.validateCategoryId, postController.create);

module.exports = router;