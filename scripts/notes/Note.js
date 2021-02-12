export const NoteHTMLConverter = (noteObject, criminalArray) => {
    const relatedCriminal = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
    return `
        <section class="note" id="noteID=${noteObject.id}">
            <div class="noteData note__date">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US', { timeZone: "UTC" })  }</div>
            <div class="noteData note__subject">Subject: ${ noteObject.subject }</div>
            <div class="noteData note__criminal">Suspect: ${ relatedCriminal.name }</div>
            <div class="noteData note__note">${ noteObject.note }</div>
            <button class="deleteNoteButton" id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}