const Pool = require("../models/pool.model");

module.exports = {
  async getAll(req, res) {
    try {  
      const data = await Pool.find()
      .populate("Low")
      .populate("Normal")
      .populate("High");
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async getOne(req, res) {
    try {
      const id = req.params.poolid;
      const data = await Pool.findById(id);
      console.log(data.tickets)
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async create(req, res) {
    try {
      console.log(req.body);
      const data = await Pool.create(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async update(req, res) {
    try {
      const id = req.params.poolid;
      const newUpdate = req.body;
      const options = {
        new: true,
        useFindAndModify: false,
      };
      const data = await Pool.findByIdAndUpdate(id, newUpdate, options);
      console.log('updated data ---------------',data)
      await pool.save();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.poolid;
      const data = await Project.findByIdAndDelete(id).populate('tickets');
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
