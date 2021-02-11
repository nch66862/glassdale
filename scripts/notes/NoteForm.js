import { useCriminals } from "../criminals/CriminalProvider.js"
import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    const criminalArray = useCriminals()
    contentTarget.innerHTML = `
    <form class="notesForm" action="">
    <h3>Make a Note</h3>
    <label for="note-date">Date:</label>
    <input type="date" name="data-date" id="note-date">
    <p>Subject</p>
    <input type="text" id="note-subject" name="data-subject"></input>
    <p>Relevant Criminal</p>
    <select id="note-criminal" class="criminalSelect">
    <option value="0">Pick a Criminal...</option>
    ${criminalArray.map(criminal => `<option value="${ criminal.id }">${ criminal.name }</option>`).join("")}
    </select>
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
            criminalID: parseInt(document.getElementById("note-criminal").value),
            note: document.getElementById("note-text").value
        }
        // Change API state and application state
        saveNote(newNote)
        document.getElementById("note-date").value = ""
        document.getElementById("note-subject").value = ""
        document.getElementById("note-criminal").value = "0"
        document.getElementById("note-text").value = ""
    }
})