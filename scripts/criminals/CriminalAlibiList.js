import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".alibiContainer")
const eventHub = document.querySelector(".container")

let completeCriminalArray = []

eventHub.addEventListener("showAlibiClicked", customEvent => {
    getCriminals()
    .then( () => {
        completeCriminalArray = useCriminals()
        const criminalThatWasChosen = completeCriminalArray.find(criminalObj => { // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
            return criminalObj.id === parseInt(customEvent.detail.criminalID) //parseInt changes the string to a number so the data type matches. It was a string because if came from an HTML element. 
        }
        )
        render(criminalthatWasChosen)
    }
)
})

const render = (selectedCriminal) => {
    const alibiConvertedToString = `
        <h3>Criminal Alibi</h3>
        <h4>Selected Criminal: ${selectedCriminal.name}</h4>
        <h5>Known Associates</h5>
        <p>${selectedCriminal.known_associates.name}
        <h5>Alibi</h5>
        <p>${selectedCriminal.known_associates.alibi}
    `
    contentTarget.innerHTML = alibiConvertedToString
}