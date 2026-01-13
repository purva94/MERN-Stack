import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express(); //Creates an Express application , this the whole application
const PORT = process.env.PORT || 5001;

connectDB();

//middleware
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  //Start the server  ,Tells Node.js to listen on port 5001
  console.log("server stared on PORT :", PORT);
});
