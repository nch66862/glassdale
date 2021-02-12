import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { ConvictionSelect } from "../convictions/ConvictionSelect.js"
import { OfficerSelect } from "../officers/OfficerSelect.js";
import { OfficerList } from "../officers/OfficerList.js"
import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"

let criminalArray = [] //create a variable to store my criminal array
let facilityArray = []
let criminalFacilitiesArray = []
let criminalsContainer = document.querySelector(".criminalsContainer") //specify where I want the criminals to render

export const CriminalList = () => {
  return getCriminals() //an API call to get an array of criminal objects
  .then(getFacilities)
  .then(getCriminalFacilities)
  .then(() => {
    criminalArray = useCriminals() //after getting the data (.then) get the array and put it in my local variable criminalArray
    facilityArray = useFacilities()
    criminalFacilitiesArray = useCriminalFacilities()
    render(criminalArray, facilityArray, criminalFacilitiesArray) //put the criminals on the web page
  }
  )
  .then(ConvictionSelect) //load these after the target HTML elements have rendered
  .then(OfficerSelect) //load these after the target HTML elements have rendered
}


const render = (arrayOfAllCriminals, arrayOfAllFacilities, criminalFacilitiesRelationshipArray) => { //puts the html structure in the correct element so it shows up on the web page
  let criminalsHTMLRepresentation = ""
  criminalsHTMLRepresentation = arrayOfAllCriminals.map(criminalObj => {
    const facilityRelationshipForThisCriminal = criminalFacilitiesRelationshipArray.filter(relationships => relationships.criminalId === criminalObj.id)
    const facilities = facilityRelationshipForThisCriminal.map(relationshipObj => {
      const matchingFacilityObject = arrayOfAllFacilities.find(facility => facility.id === relationshipObj.facilityId)
      return matchingFacilityObject
    })
    return Criminal(criminalObj, facilities)
  }).join("")
  if (criminalsContainer === document.querySelector(".criminalsContainer")) { //this conditional runs on page load
    //put all of those elements to the DOM
    criminalsContainer.innerHTML = `
    <h4>Select a Criminal Filter</h4>
    <div class="filters">
    <div class="filter filters__crime"></div>
    <p>or</p>
    <div class="filter filters__incarceration"></div>
    <p>or</p>
    <div class="filter filters__officer"></div>
    </div>
    <h3>Glassdale Criminal Database</h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentation}
    </section>`
  }
  else {// this conditional should run after filtering
    criminalsContainer.innerHTML = `
    ${criminalsHTMLRepresentation}
    `
  }
  const customEvent = new CustomEvent("peopleContainerChanged", { //create a custom event.
    detail: {
      informationRendered: "Criminals" //assigns the value specified in each option element to this variable officerThatWasChosen
    }
  })
  eventHub.dispatchEvent(customEvent)
}

/* EVENTS */

const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("crimeChosen", event => { //listen for the custom event from ConvictionSelect.js
  if (event.detail.crimeThatWasChosen !== "0") { //checks that something other than the top box with no value was selected
    const convictionsArray = useConvictions() // Get a copy of the array of convictions from the data provider
    const convictionThatWasChosen = convictionsArray.find(convictionObj => { // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
      return convictionObj.id === parseInt(event.detail.crimeThatWasChosen) //parseInt changes the string to a number so the data type matches. It was a string because if came from an HTML element. 
    }
    )
    const matchingCriminals = criminalArray.filter(matchingCriminal => { //find the criminals that have the same conviction
      return matchingCriminal.conviction === convictionThatWasChosen.name
    }
    )
    criminalsContainer = document.querySelector(".criminalsList") //specify where I want the filtered criminals to render
    render(matchingCriminals, facilityArray, criminalFacilitiesArray) //put those filtered criminals on the web page
  }
}
)

eventHub.addEventListener("officerChosen", event => { //listen for the custom event from OfficerSelect.js
  if (event.detail.officerThatWasChosen !== "0") { //checks that something other than the top box with no value was selected
    const officerArray = useOfficers() // Get a copy of the array of convictions from the data provider
    const officerThatWasChosen = officerArray.find(officerObj => { // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
      return officerObj.id === parseInt(event.detail.officerThatWasChosen) //parseInt changes the string to a number so the data type matches. It was a string because if came from an HTML element. 
    }
    )
    const matchingCriminals = criminalArray.filter(matchingCriminal => { //find the criminals that have the same arresting officer
      return matchingCriminal.arrestingOfficer === officerThatWasChosen.name
    }
    )
    criminalsContainer = document.querySelector(".criminalsList") //specify where I want the filtered criminals to render
    render(matchingCriminals, facilityArray, criminalFacilitiesArray) //put those filtered criminals on the web page
  }
}
)

eventHub.addEventListener("showCriminalsClicked", event => { //listen for the custom event from CriminalButton.js
  const targetContainer = document.querySelector(".peopleContainer")
  targetContainer.innerHTML = `
    <article class="criminalsContainer"></article>
    <article class="officersContainer"></article>
    `
  criminalsContainer = document.querySelector(".criminalsContainer")
  CriminalList()
  OfficerList()
}
)

