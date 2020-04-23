const router = require("express").Router();
const poolControllers = require("../controllers/poolController");

router
  .route("/")
  .get(poolControllers.getAll)
  .post(poolControllers.create);
router
  .route("/:poolid")
  .put(poolControllers.update);
  

  module.exports = router;