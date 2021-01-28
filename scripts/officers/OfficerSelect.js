// OfficerSelect component that renders a select HTML element
// which lists all convictions in the Glassdale PD API
 
import { useOfficers } from "./OfficerProvider.js" //the copy of the parsed returned array
import { getOfficers } from "./OfficerProvider.js" //The api data call to get convictions

const contentTarget = document.querySelector(".filters__officer") // Get a reference to the DOM element where the <select> will be rendered

export const OfficerSelect = () => {
    getOfficers() // Trigger fetching the API data and loading it into application state
    .then( () => { //.then says wait for data to come back
      const officers = useOfficers() // Get all convictions from application state
      render(officers) //build out the select element HTML
    })
}

const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an arresting Officer...</option>
            ${
                officersCollection.map(officerObject => { //build out each option element inside the select box
                    const officerName = officerObject.name
                    const officerIndex = officerObject.id
                    return `<option value="${officerIndex}">${officerName}</option>`
                }).join("") //take out the commas in the HTML
            }
        </select>
    `
}

const eventHub = document.querySelector(".container") //define what the eventHub will be (needs to be the same across the application)

eventHub.addEventListener("change", event => {
    if (event.target.id === "officerSelect") { //officerSelect is an ID on the select element for convictions
        const customEvent = new CustomEvent("officerChosen", { //create a custome event. This is specific to choosing an officer from the dropdown menu
            detail: {
                officerThatWasChosen: event.target.value //assigns the value specified in each option element to this variable officerThatWasChosen
            }
        })
        eventHub.dispatchEvent(customEvent) //sends the officerChosen custom event out to all my files in case they are listening
    }
})