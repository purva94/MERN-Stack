export function getAllnotes(req, res) {
  res.status(200).send("You have fetched the notes");
}
export function CreateNote(req, res) {
  es.status(200).json({ message: "notes created successfully" });
}

export function UpdateNotes(req, res) {
  res.status(200).json({ message: "Note updated successfully" });
}

export function DeleteNotes(req, res) {
  res.status(200).json({ message: "notes deleted successfully" });
}
