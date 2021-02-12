import { Facility } from "./Facility.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"

const eventHub = document.querySelector(".container") //specify the outer container as the event hub
const targetContainer = document.querySelector(".peopleContainer")

const FacilityList = () => {
    getFacilities()
        .then(() => {
            const facilityArray = useFacilities()
            const facilityHTMLRepresentations = facilityArray.map(facility => {

                

                return Facility(facility, criminalsInside)
            }).join("")
            targetContainer.innerHTML = `
        <article class="facilityContainer">
            <h3>Facility Database</h3>
            <section class="facilityList">
                ${facilityHTMLRepresentations}
            </section>
        </article>
        `
        })
}

eventHub.addEventListener("showFacilitiesClicked", event => { //listen for the custom event from ConvictionSelect.js
    FacilityList()
    const customEvent = new CustomEvent("peopleContainerChanged", { //create a custom event.
        detail: {
            informationRendered: "Facilities" //assigns the value specified in each option element to this variable officerThatWasChosen
        }
    })
    eventHub.dispatchEvent(customEvent)
}
)
