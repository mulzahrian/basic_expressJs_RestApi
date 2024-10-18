const getAllUser = (req, res) => {
  const dummyData = {
    id: "1",
    name: "ari ganteng",
    email: "arigantengbaru@gmail.com",
  };
  res.json({
    message: "Get All Users Success",
    data: dummyData,
    status: 200,
  });
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
