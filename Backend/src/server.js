import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express(); //Creates an Express application , this the whole application
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//middleware
app.use(express.json()); //this middleware will parse JSON bodies: req.body
app.use(rateLimiter);
if (process.env.NODE_ENV != "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req  method is ${req.method} & req url is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  // app.listen(PORT, () => {
  //   //Start the server  ,Tells Node.js to listen on port 5001
  //   console.log("server stared on PORT :", PORT);
  // });
  app.listen(PORT, "0.0.0.0", () => {
    console.log("server started on PORT :", PORT);
  });
});
