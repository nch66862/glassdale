import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import { Witness } from "./Witness.js"

const eventHub = document.querySelector(".container") //specify the outer container as the event hub
const targetContainer = document.querySelector(".peopleContainer")

const FacilityList = () => {
    getWitnesses()
        .then(() => {
            const witnessArray = useWitnesses()
            let witnessHTMLRepresentations = ""
            for (const witness of witnessArray) {
                witnessHTMLRepresentations += Witness(witness)
            }
            targetContainer.innerHTML = `
        <article class="witnessContainer">
            <h3>Cold Case Witnesses</h3>
            <section class="witnessList">
                ${witnessHTMLRepresentations}
            </section>
        </article>
        `
        })
}

eventHub.addEventListener("showFacilitiesClicked", event => { //listen for the custom event from ConvictionSelect.js
    // FacilityList()
    const customEvent = new CustomEvent("peopleContainerChanged", { //create a custom event.
        detail: {
            informationRendered: "Facilities" //assigns the value specified in each option element to this variable officerThatWasChosen
        }
    })
    eventHub.dispatchEvent(customEvent)
}
)
