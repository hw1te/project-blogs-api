const { Router } = require('express');

const router = Router();
const categoryController = require('../controllers/categoryController');

router.post('/', categoryController.validateToken, categoryController.create);

module.exports = router;
