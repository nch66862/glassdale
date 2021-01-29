const witnessButton = '<button class="witnessCriminalToggle">Show Witnesses</button>'

export const ShowWitnessButton = () => {
    const contentTarget = document.querySelector(".peopleContainer")
    contentTarget.insertAdjacentHTML('afterbegin', witnessButton)
}

// export const criminalStatusCommunicator = (criminalsHaveRendered) => {
//     if (criminalsHaveRendered === true) {

//     }
// }

const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.className === "witnessCriminalToggle") {
        const customEvent = new CustomEvent("witnessToggleClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

// eventHub.addEventListener("witnessToggleClicked", event => { //listen for the custom event created above
//         const contentTarget = document.querySelector(".witnessCriminalToggle")
//         if (document.querySelector(".peopleContainer").contains(""))
//         render(matchingCriminals) //put those filtered criminals on the web page
    
// }
// )  