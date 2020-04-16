const router = require("express").Router();
const ticketControllers = require("../controllers/ticketControllers");

router
  .route('/')
  .get(ticketControllers.getfull)

module.exports = router;
