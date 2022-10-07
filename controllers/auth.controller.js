const { login } = require("../repository/auth.repository");

const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const data = await login(username, password);
    return res.json({
      successful: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  logIn,
};
