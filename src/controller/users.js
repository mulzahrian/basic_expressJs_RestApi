const getAllUser = (req, res) => {
  const dummyData = {
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

module.exports = {
  getAllUser,
  createNewUser,
};
