const { Thought, User } = require("../models");

const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughtData = Thought.find().sort({ createdAt: -1 });
      res.json(thoughtData);
      if (!thoughtData) {
        return res.status(404).json({ message: "No thoughts found!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
        const thoughtData = await Thought.findOne({ _id: req.params.id })
        res.json(thoughtData);
        if (!thoughtData) {
            return res.status(404).json({ message: "No thought found with this id!" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
        const thoughtData = await Thought.create(req.body);
        const userData = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thoughtData._id } },
            { new: true }
        );
        if (!userData) {
            return res.status(404).json({ message: "No user found with this id!" });
        }
        res.json(thoughtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            {$set: req.body},
            { new: true, runValidators: true }
        );

        const userData =
    }
  },
  async deleteThought(req, res) {},
  async addReaction(req, res) {},
  async deleteReaction(req, res) {},
};
module.exports = thoughtController;
