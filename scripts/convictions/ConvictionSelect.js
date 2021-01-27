// ConvictionSelect component that renders a select HTML element
// which lists all convictions in the Glassdale PD API
 
import { useConvictions } from "./ConvictionProvider.js" //the copy of the parsed returned array
import { getConvictions } from "./ConvictionProvider.js" //The api data call to get convictions

const contentTarget = document.querySelector(".filters__crime") // Get a reference to the DOM element where the <select> will be rendered

export const ConvictionSelect = () => {
    getConvictions() // Trigger fetching the API data and loading it into application state
    .then( () => { //.then says wait for data to come back
      const convictions = useConvictions() // Get all convictions from application state
      render(convictions) //build out the select element HTML
    })
}

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(convictionObject => { //build out each option element inside the select box
                    const crime = convictionObject.name
                    const crimeIndex = convictionObject.id
                    return `<option value="${crimeIndex}">${crime}</option>`
                }).join("") //take out the commas in the HTML
            }
        </select>
    `
}

const eventHub = document.querySelector(".container") //define what the eventHub will be (needs to be the same across the application)

eventHub.addEventListener("change", event => {

    if (event.target.id === "crimeSelect") { //crimeSelect is an ID on the select element for convictions
        
        const customEvent = new CustomEvent("crimeChosen", { //create a custome event. This is specific to choosing a crime from the dropdown menu
            detail: {
                crimeThatWasChosen: event.target.value //assigns the value specified in each option element to this variable crimeThatWasChosen
            }
        })

        eventHub.dispatchEvent(customEvent) //sends the crimeChosen custom event out to all my files in case they are listening
    }
})