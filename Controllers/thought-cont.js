const { Thought, User } = require("../models");

const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughtData = await Thought.find().sort({ createdAt: -1 });
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
      const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });
      res.json(thoughtData);
      if (!thoughtData) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
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
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true, runValidators: true }
      );

      if (!thoughtData) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thoughtData = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thoughtData) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }
      const userData = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
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
  async addReaction(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      if (!thoughtData) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { new: true }
      );
      if (!thoughtData) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
module.exports = thoughtController;
