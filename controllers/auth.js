const register = async (req, res) => {
  res.send("User Register");
};

const login = async (req, res) => {
  res.send("User Login");
};

module.exports = { register, login };
