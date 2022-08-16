const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const user = req.body;
    console.log(user, 'user teste');
    const payload = {
      displayName: user.displayName,
      email: user.email,
      image: user.image,
    };
    const { code, data } = await userService.create(user);
    if (code === 201) {
      const token = userService.makeToken(payload);
      return res.status(code).json({ token });
    }

    res.status(code).json(data);
  },

  getUsers: async (_req, res) => {
    const { code, data } = await userService.getUsers();
    console.log(code, data);
    res.status(code).json(data);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const { code, data } = await userService.getById(id);
    console.log(code);
    return res.status(code).json(data);
  },

};

module.exports = userController;