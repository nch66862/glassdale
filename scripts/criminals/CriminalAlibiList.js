import { getCriminals, useCriminals } from "./CriminalProvider.js";

const contentTarget = document.querySelector(".alibiContainer")
const eventHub = document.querySelector(".container")

let completeCriminalArray = []
let knownAssociatesArray = []

eventHub.addEventListener("criminalAlibiChosen", customEvent => {
    getCriminals()
    .then( () => {
        completeCriminalArray = useCriminals()
        const criminalthatWasChosen = completeCriminalArray.find(criminalObj => { // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
            return criminalObj.id === parseInt(customEvent.detail.alibiID) //parseInt changes the string to a number so the data type matches. It was a string because if came from an HTML element. 
        }
        )
        knownAssociatesArray = criminalthatWasChosen.known_associates
        render(knownAssociatesArray, criminalthatWasChosen)
    }
    )
})

const render = (selectedCriminalAssociates, selectedCriminal) => {

    const alibiConvertedToString = `
        <h3>Criminal Alibi</h3>
        <h4>Selected Criminal: ${selectedCriminal.name}</h4>
        <h5>Known Associates and their Alibi</h5>
        ${AssociatesHTMLBuilder(selectedCriminalAssociates)}
    `
    contentTarget.innerHTML = alibiConvertedToString
}

const AssociatesHTMLBuilder = associatesArray => {
    let hTML = ""
    for (const associate of associatesArray) {
        hTML += `
        <p>${associate.name}: ${associate.alibi}</p>
        `
    }
    return hTML
}