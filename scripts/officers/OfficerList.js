import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

export const OfficerList = () => {
  const officersContainer = document.querySelector(".officersContainer")
  getOfficers()
    .then(() => {
      const officerArray = useOfficers()
      let officersHTMLRepresentations = ""
      for (const officer of officerArray) {
        officersHTMLRepresentations += Officer(officer)
      }
      officersContainer.innerHTML = `
        <h3>Glassdale Officers</h3>
        <section class="officersList">
        ${officersHTMLRepresentations}
        </section>`
    })
}


const eventHub = document.querySelector(".container") //specify the outer container as the event hub
const targetContainer = document.querySelector(".peopleContainer")

const OfficerList = () => {
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
