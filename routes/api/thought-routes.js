// require express router
const router = require('express').Router();

// set requirements from thoughts-controller
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

// routing to api/thoughts  GET request
router.route('/').get(getAllThoughts);

// routing to api/thoughts/:id GET, PUT, DELETE requests/ functions
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// routing to api/thoughts/:userId  POST request
router.route('/:userId').post(createThoughts);

// routing to api/thoughts/:thoughtId/reactions POST request
 router.route('/:thoughtId/reactions').post(addReaction);

// routing to api/thoughts/:thoughtId/reactionId DELETE
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;