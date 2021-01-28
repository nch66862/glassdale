import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".alibiContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
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