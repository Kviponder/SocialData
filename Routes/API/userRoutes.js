const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../Controllers/user-cont");

// /api/users (GET, POST)
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId/friends/:friendId (POST, DELETE)
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// /api/users/:id (GET, PUT, DELETE)
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
