const router = require("express").Router();
const poolControllers = require("../controllers/poolController");
router
  .route("/")
  .get(poolControllers.getAll)
  .post(poolControllers.create)
  .put(poolControllers.update);
  

  module.exports = router;