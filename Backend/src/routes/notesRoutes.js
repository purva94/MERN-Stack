import express, { json } from "express";
import {
  CreateNote,
  DeleteNotes,
  getAllnotes,
  UpdateNotes,
  getNoteById,
} from "../controllers/notesController.js";

const router = express.Router(); // one section of the app(routes). --> route-handler object used to organize routes.
// const app = express(); this is the whole app

router.get("/", getAllnotes);
router.post("/", CreateNote);
router.get("/:id", getNoteById);
router.put("/:id", UpdateNotes);
router.delete("/:id", DeleteNotes);

export default router;
