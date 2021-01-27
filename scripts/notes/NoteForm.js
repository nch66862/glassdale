
const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
    <h3>Make a Note</h3>
    <input type="date" name="" id="">
    <p>Subject</p>
    <input type="text" id="note-text"></input>
    <p>Relevant Suspects</p>
    <input type="text" id="note-text"></input>
    <p>Notes</p>
    <input type="text" name="" id="">
    <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}