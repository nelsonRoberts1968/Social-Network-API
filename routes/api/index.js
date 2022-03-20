const router = require("express").Router();

// setting routes user and thought routes
const usersRoutes = require("./user-routes");
const thoughtsRoutes = require("./thought-routes");

// users route
router.use("/users", usersRoutes);

// thought route
router.use("/thoughts", thoughtsRoutes);

module.exports = router;
