import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

  getCriminals()
    .then(() => {
      const criminalArray = useCriminals()
      // debugger
      /*
            Now that you have the data, what
            component should be rendered?
        */

      let criminalsHTMLRepresentation = ""

      for (const criminal of criminalArray) {
        criminalsHTMLRepresentation += Criminal(criminal)
      }
      
      criminalsContainer.innerHTML = `
        <h3>Glassdale Criminals</h3>
        <section class="criminalsList">
        ${criminalsHTMLRepresentation}
        </section>`
    })
}
