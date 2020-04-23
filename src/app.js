const express = require("express");
const connection = require("./db");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const projectRouter = require("./routes/projectRoute");
const ticketRouter = require("./routes/ticketRoute");
const poolRouter = require("./routes/poolRoute");

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use("/projects", projectRouter);
app.use("/tickets", ticketRouter);
app.use("/pool", poolRouter);

module.exports = app;
