const notes = [{ "title": "sufi", "description": "add a note" }]

const noteful = notes.filter((note) => {
  return note.title === "sufi"
})

console.log(noteful)