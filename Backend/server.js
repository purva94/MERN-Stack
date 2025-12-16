import express from "express";
// const express = require("express");

const app = express(); //Creates an Express application
//here is the route
app.get("/api/notes", (req, res) => {
  res.send("you got the 5 notes");
});
app.post("/api/notes", (req, res) => {
  res.status(201).json("Note created sucessfully");
});
app.put("/api/notes/:id", (req, res) => {
  res.status(201).json("Note updated successfully");
});
app.delete("/api/notes/:id", (req, res) => {
  res.status(300).json("Note deleted successfully");
});
app.listen(5001, () => {
  //Start the server  ,Tells Node.js to listen on port 5001
  console.log("server stared on port : 5001");
});
