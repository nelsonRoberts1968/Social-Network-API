const router = require("express").Router();

const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/users-controller");

// routing to api/users GET, POST request
router.route("/").get(getAllUsers).post(createUsers);

// routing to api/users/:id GET, PUT, DELETE requests
router.route("/:id").get(getUsersById).put(updateUsers).delete(deleteUsers);

// routing to api/users/:userId/friends/:friendId POST, DELETE requests
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
