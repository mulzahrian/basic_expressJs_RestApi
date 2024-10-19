const usersModels = require("../models/users");

const getAllUser = async (req, res) => {
  try {
    const [dataUser] = await usersModels.getAllUser();
    res.json({
      message: "Get All Users Success",
      data: dataUser,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "Create User Success",
    data: req.body,
    status: 200,
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  res.json({
    message: "Update User Success",
    status: 200,
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Delete User Success",
    status: 200,
  });
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
