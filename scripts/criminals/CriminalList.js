import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

const criminalsContainer = document.querySelector(".criminalsContainer")
let criminalArray = []

export const CriminalList = () => {
  getCriminals()
  .then(() => {

      criminalArray = useCriminals()
      render(criminalArray)

    }
    )
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {

    if (event.detail.crimeThatWasChosen !== "0"){

      // Get a copy of the array of convictions from the data provider
      const convictionsArray = useConvictions()

      // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
      const convictionThatWasChosen = convictionsArray.find(convictionObj => {
        return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
      }
      )


        const matchingCriminals = criminalArray.filter(matchingCriminal => {
          // debugger
          //crime that was chosen is a number that represents a crime
          //need to correlate number to meaning
          //meaning will correspond with matchingcriminal.conviction
          // let objectInDesiredIndex = {}
          // const indexNumber = event.detail.crimeThatWasChosen - 1
          // const convictionList = useConvictions()
          // const desiredIndex = convictionList.slice(indexNumber, 1)
          // const arrayIteratorInDesiredIndex = desiredIndex.values()
          // for (const object of arrayIteratorInDesiredIndex) {
          //   objectInDesiredIndex = object;
          // }
          // const correlatingCrime = objectInDesiredIndex.name

          return matchingCriminal.conviction === convictionThatWasChosen.name
        })

       render(matchingCriminals)

    }
}
)

const render = criminalArray => {
  let criminalsHTMLRepresentation = ""

  for (const criminal of criminalArray) {
    criminalsHTMLRepresentation += Criminal(criminal)
  
    criminalsContainer.innerHTML = `
      <h3>Glassdale Criminals</h3>
      <section class="criminalsList">
      ${criminalsHTMLRepresentation}
      </section>`
  }
}