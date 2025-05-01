const express = require("express");
const router = express.Router();
const Member = require("../models/Member");
const multer = require("multer");
const path = require("path");

// Configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  }
});
const upload = multer({ storage: storage });

// POST /api/members (Add member)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newMember = new Member({
      name: req.body.name,
      role: req.body.role,
      email: req.body.email,
      image: req.file.filename,
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/members (Fetch all members)
router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/members/:id (Get member by ID)
router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
