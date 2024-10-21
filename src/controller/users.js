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

const createNewUser = async (req, res) => {
  const bodyPayload = req.body;
  try {
    await usersModels.createNewUser(bodyPayload);
    res.json({
      message: "Create User Success!",
      data: bodyPayload,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error!",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await usersModels.updateUser(body, id);
    res.json({
      message: "Update User Success",
      status: 200,
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error!",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await usersModels.deleteUser(id);
    res.json({
      message: "Delete User Success",
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error!",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
