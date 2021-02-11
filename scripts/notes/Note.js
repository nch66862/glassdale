export const NoteHTMLConverter = (noteObject, criminalArray) => {
    const relatedCriminal = criminalArray.find(criminal => criminal.id === noteObject.criminalID)
    return `
        <section class="note" id="noteID=${noteObject.id}">
            <div class="note__date">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US', { timeZone: "UTC" })  }</div>
            <div class="note__subject">Subject: ${ noteObject.subject }</div>
            <div class="note__criminal">Suspect: ${ relatedCriminal.name }</div>
            <div class="note__note">${ noteObject.note }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}