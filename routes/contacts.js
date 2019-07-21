const express = require("express");
const router = express.Router();

// @route   POST api/contacts
// @desc    Create a users contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Create a new contact");
});

// @route   GET api/contacts
// @desc    Get all users contact
// @access  Private
router.get("/", (req, res) => {
  res.send("Find contacts");
});

// @route   PUT api/contacts/:id
// @desc    Edit a users contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   DELETE api/contacts/:id
// @desc    delete a users contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete ccontact");
});

module.exports = router;
