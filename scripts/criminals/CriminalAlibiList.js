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
        render(knownAssociatesArray, completeCriminalArray)
    }
    )
})

const render = (selectedCriminalAssociates, selectedCriminal) => {

    const alibiConvertedToString = `
        <h3>Criminal Alibi</h3>
        <h4>Selected Criminal: ${selectedCriminal.name}</h4>
        <h5>Known Associates</h5>
        ${nameOfAssociatesHTMLBuilder(selectedCriminalAssociates)}
        <h5>Alibi</h5>
        ${alibiofAssociatesHTMLBuilder(selectedCriminalAssociates)}
    `
    contentTarget.innerHTML = alibiConvertedToString
}

const nameOfAssociatesHTMLBuilder = associatesArray => {
    let nameHTML = ""
    for (const associate of associatesArray) {
        nameHTML += `
        <p>${associate.name}
        `
    }
    return nameHTML
}
const alibiofAssociatesHTMLBuilder = associatesArray => {
    let alibiHTML = ""
    for (const associate of associatesArray) {
        alibiHTML += `
        <p>${associate.alibi}
        `
    }
    return alibiHTML

}