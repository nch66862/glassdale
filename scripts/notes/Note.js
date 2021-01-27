export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note" id="noteID=${noteObject.id}">
            <div class="note__date">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
            <div class="note__subject">Subject: ${ noteObject.subject }</div>
            <div class="note__suspects">Suspects: ${ noteObject.suspects }</div>
            <div class="note__note">${ noteObject.note }</div>
        </section>
    `
}