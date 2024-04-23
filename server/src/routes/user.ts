import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("button clicked request");
  res.status(200).json({ message: "Button clicked successfully" });
});

export default router;
