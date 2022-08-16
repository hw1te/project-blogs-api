const postService = require('../services/postService');

const postController = {
  create: async (req, res) => {
    const { body } = req;
    const { user } = req;
    const { code, data } = await postService.create(body, user);

    return res.status(code).json(data);
  },

  getAll: async (_req, res) => {
    const { code, data } = await postService.getAll();

    return res.status(code).json(data);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const { code, data } = await postService.getBydId(id);

    return res.status(code).json(data);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { user } = req;

    const { code, data } = await postService.update(req.body, id, user.id);

    res.status(code).json(data);
  },
};

module.exports = postController;