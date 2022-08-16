const { Router } = require('express');

const router = Router();
const postController = require('../controllers/postController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const postMiddleware = require('../middlewares/postMiddleware');

router.get('/', tokenMiddleware.validateToken, postController.getAll);
router.get('/:id', tokenMiddleware.validateToken, postController.getById);
router.post('/', tokenMiddleware.validateToken, postMiddleware.validateBody,
  postMiddleware.validateCategoryId, postController.create);
router.put('/:id', tokenMiddleware.validateToken, postController.update);
router.delete('/:id', tokenMiddleware.validateToken, postController.delete);

module.exports = router;
