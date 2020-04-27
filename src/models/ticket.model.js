const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
    status: {
      type: String,
      enum: ["New", "Open", "Pending", "Closed"],
      default: "New",
    },
    priority: {
      type: String,
      enum: ["Normal", "High", "Low"],
      default: "Normal",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    developer: {
      //define user
      type: String,
    },
    teamLead: {
      //define user
      type: String,
    },
    comments: {
      type: [String],
      default: null,
    },
  },
  { timestamps: true }
);

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;
