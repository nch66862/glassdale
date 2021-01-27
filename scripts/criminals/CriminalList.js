import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

let criminalArray = [] //create a variable to store my criminal array

export const CriminalList = () => {
  getCriminals() //an API call to get an array of criminal objects
  .then(() => {
    
    criminalArray = useCriminals() //after getting the data (.then) get the array and put it in my local variable criminalArray
    render(criminalArray) //put the criminals on the web page
    
  }
  )
}

const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("crimeChosen", event => { //listen for the custom event from ConvictionSelect.js
  
  if (event.detail.crimeThatWasChosen !== "0"){ //checks that something other than the top box with no value was selected
    
    const convictionsArray = useConvictions() // Get a copy of the array of convictions from the data provider
    
    const convictionThatWasChosen = convictionsArray.find(convictionObj => { // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
      return convictionObj.id === parseInt(event.detail.crimeThatWasChosen) //parseInt changes the string to a number so the data type matches. It was a string because if came from an HTML element. 
    }
    )
    
    const matchingCriminals = criminalArray.filter(matchingCriminal => { //find the criminals that have the same conviction
      return matchingCriminal.conviction === convictionThatWasChosen.name
      }
    )
    
    render(matchingCriminals) //put those filtered criminals on the web page
    
    }
  }
  )
  
  const criminalsContainer = document.querySelector(".criminalsContainer") //specify where I want the criminals to render

  const render = criminalArray => { //puts the html structure in the correct element so it shows up on the web page
    let criminalsHTMLRepresentation = ""
    
    for (const criminal of criminalArray) { //iterates through each criminal object and builds an html element for each criminal
      criminalsHTMLRepresentation += Criminal(criminal)
    }
    //put all of those elements to the DOM
    criminalsContainer.innerHTML = `
    <h3>Glassdale Criminals</h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentation}
    </section>`
  }