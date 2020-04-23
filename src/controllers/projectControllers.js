const Project = require("../models/project.model");

module.exports = {
  async getAll(req, res) {
    try {  
      const data = await Project.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async getOne(req, res) {
    try {
      const id = req.params.projectid;
      const data = await Project.findById(id);
      console.log(data.tickets)
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async create(req, res) {
    try {
      console.log(req.body);
      const data = await Project.create(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async update(req, res) {
    try {
      const id = req.params.projectid;
      const newUpdate = req.body;
      const options = {
        new: true,
        runValidation: true,
        useFindAndModify: false,
      };
      const data = await Project.findByIdAndUpdate(id, newUpdate, options).populate('tickets');
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.projectid;
      const data = await Project.findByIdAndDelete(id).populate('tickets');
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
