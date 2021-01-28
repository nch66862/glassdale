import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

let notesAreShowingFlag = false

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
    notesAreShowingFlag = true
})

eventHub.addEventListener("noteStateChanged", customEvent => {
    if (notesAreShowingFlag === true) {
        NoteList()
    }
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map( note => {
        return NoteHTMLConverter(note)
    }).join("")
    
    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}