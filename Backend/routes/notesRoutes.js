import express, { json } from "express";

const router = express.Router(); // one section of the app. --> route-handler object used to organize routes.
// const app = express(); this is the whole app

export default router;

router.get("/", (req, res) => {
  res.status(200).send("You have fetched the notes");
});
router.post("/", (req, res) => {
  res.status(200).json({ message: "notes created successfully" });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully" });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "notes deleted successfully" });
});
