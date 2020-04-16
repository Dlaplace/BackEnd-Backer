const router = require("express").Router();
const projectControllers = require("../controllers/projectControllers");
const ticketControllers = require("../controllers/ticketControllers");

router
  .route("/")
  .get(projectControllers.getAll)
  .post(projectControllers.create);
router
  .route("/:projectid")
  .get(projectControllers.getOne)
  .put(projectControllers.update)
  .delete(projectControllers.delete);
router
  .route("/:projectid/ticket")
  .get(ticketControllers.getAll)
  .post(ticketControllers.create);
router
  .route("/:projectid/ticket/:ticketid")
  .get(ticketControllers.getOne)
  .put(ticketControllers.update)
  .delete(ticketControllers.delete);
router
  .route('/tickets')
  .get(ticketControllers.getfull)

module.exports = router;
