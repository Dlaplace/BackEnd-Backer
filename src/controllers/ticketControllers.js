const Ticket = require("../models/ticket.model");
const Project = require("../models/project.model");

module.exports = {
  async getAll(req, res) {
    try {
      const { projectid } = req.params;
      console.log(projectid);
      const data = await Ticket.find({ project: { _id: projectid } }).populate('project');
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.body;
      const data = await Ticket.findById(id).populate('project');
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async create(req, res) {
    try {
      const { projectid } = req.params;
      const project = await Project.findById(projectid);
      const data = await Ticket.create({
        ...req.body,
        project: project,
      });
      project.tickets.push(data);
      await project.save();
      console.log(project.tickets)
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async update(req, res) {
    try {
      const { ticketid } = req.params;
      const newUpdate = req.body;
      const options = {
        new: true,
        runValidation: true,
        useFindAndModify: false,
      };
      const data = await Ticket.findByIdAndUpdate(ticketid, newUpdate, options).populate('project');
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async delete(req, res) {
    try {
      const { ticketid } = req.params;
      const data = await Ticket.findByIdAndDelete(ticketid).populate('project');
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async getfull(req, res) {
    try {
      console.log("getting all tickets...");
      const data = await Ticket.find().populate('project');
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
