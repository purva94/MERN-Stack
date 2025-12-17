import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express(); //Creates an Express application , this the whole application

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  //Start the server  ,Tells Node.js to listen on port 5001
  console.log("server stared on port : 5001");
});
