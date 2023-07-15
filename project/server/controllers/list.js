const express = require("express");
const list = require("../modules/list");
const ObjectId = require("mongoose").Types.ObjectId;

const getList = async function (req, res) {
  try {
    const notes = await list.find().lean();

    if (!list?.length) {
      return res.status(400).json({ message: "No notes found" });
    }

    res.json(notes);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e });
  }
};

const postList = async function (req, res) {
  try {
    const { name, email, comment } = req.body;

    if (!name || !email || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = { name: name, email: email, comment: comment };

    const user = await list.create(newPost);

    res.json(newPost);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e });
  }
};

module.exports = {
  getList,
  postList,
};
