const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addReaction,
  removeReaction,
  addThought,
  removeThought,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/reactions').post(addReaction);


router.route('/:userId/reactions/:reactionId').delete(removeReaction);


router.route('/:userId/thoughts').post(addThought);


router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
