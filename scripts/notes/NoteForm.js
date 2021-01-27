import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
    <form class="notesForm" action="">
        <h3>Make a Note</h3>
        <input type="date" name="data-date" id="note-date">
        <p>Subject</p>
        <input type="text" id="note-subject" name="data-subject"></input>
        <p>Relevant Suspects</p>
        <input type="text" id="note-suspects" name="data-suspects"></input>
        <p>Notes</p>
        <input type="text" name="data-notes" id="note-text">
        <button id="saveNote">Save Note</button>
    </form>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
const eventHub = document.querySelector(".container") //define what the eventHub will be (needs to be the same across the application)
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        // Make a new object representation of a note
        const newNote = {
            date: document.getElementById("note-date").value,
            subject: document.getElementById("note-subject").value,
            suspects: document.getElementById("note-suspects").value,
            note: document.getElementById("note-text").value
        }
        // Change API state and application state
        saveNote(newNote)
    }
})