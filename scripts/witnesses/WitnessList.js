import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import { Witness } from "./Witness.js"

const eventHub = document.querySelector(".container") //specify the outer container as the event hub
const targetContainer = document.querySelector(".peopleContainer")

const WitnessList = () => {
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

eventHub.addEventListener("showWitnessesClicked", event => { //listen for the custom event from ConvictionSelect.js
    WitnessList()
    const customEvent = new CustomEvent("peopleContainerChanged", { //create a custom event.
        detail: {
            informationRendered: "Witnesses" //assigns the value specified in each option element to this variable officerThatWasChosen
        }
    })
    eventHub.dispatchEvent(customEvent)
}
)
