const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  //added from mini template
  updateUser,
  deleteUser,
  //addReaction,
  //removeReaction,
  //addThought,
  removeThought,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

//router.route('/:userId/reactions').post(addReaction);


// router.route('/:userId/reactions/:reactionId').delete(removeReaction);


// router.route('/:userId/thoughts').post(addThought);


router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
