import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container") //specify the outer container as the event hub
const targetContainer = document.querySelector(".peopleContainer")

const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            const criminalArray = useCriminals()
            const officerHTMLRepresentation = officerArray.map(officerObj => {
                const arrayOfArrestedCriminals = criminalArray.filter(criminalObj => criminalObj.arrestingOfficer === officerObj.name)
                return Officer(officerObj, arrayOfArrestedCriminals)
            }).join("")
            targetContainer.innerHTML = `
        <section class="officerContainer">
            <h3>Officer Database</h3>
            <section class="officerList">
                ${officerHTMLRepresentation}
            </section>
        </section>
        `
        })
}

eventHub.addEventListener("showOfficersClicked", event => { //listen for the custom event from ConvictionSelect.js
    OfficerList()
    const customEvent = new CustomEvent("peopleContainerChanged", { //create a custom event.
        detail: {
            informationRendered: "Officers" //assigns the value specified in each option element to this variable officerThatWasChosen
        }
    })
    eventHub.dispatchEvent(customEvent)
}
)
