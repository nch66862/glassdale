import { useCriminals } from "../criminals/CriminalProvider.js"
import { useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { Facility } from "./Facility.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"

const eventHub = document.querySelector(".container") //specify the outer container as the event hub
const targetContainer = document.querySelector(".peopleContainer")

const FacilityList = () => {
    getFacilities()
        .then(() => {
            const facilityArray = useFacilities()
            const criminalFacilitesRelationships = useCriminalFacilities()
            const criminalArray = useCriminals()
            const facilityHTMLRepresentations = facilityArray.map(facility => {
                const criminalsInFacility = criminalFacilitesRelationships.filter(relationshipObj => relationshipObj.facilityId === facility.id)
                const criminalsInside = criminalsInFacility.map(crimFacRel => {
                    const matchingCriminal = criminalArray.find(criminal => criminal.id === crimFacRel.criminalId)
                    return matchingCriminal.name
                })
                return Facility(facility, criminalsInside)
            }).join("")
            targetContainer.innerHTML = `
        <section class="facilityContainer">
            <h3>Facility Database</h3>
            <section class="facilityList">
                ${facilityHTMLRepresentations}
            </section>
        </section>
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
