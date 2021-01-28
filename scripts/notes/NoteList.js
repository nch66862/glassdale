import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

eventHub.addEventListener("noteStateChanged", customEvent => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map( note => {
        return NoteHTMLConverter(note)
    }).join("")
    
    contentTarget.innerHTML = allNotesConvertedToStrings
}

export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}