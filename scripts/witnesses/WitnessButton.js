const witnessButton = '<button class="witnessCriminalToggle">Show Witnesses</button>'

export const ShowWitnessButton = () => {
    const contentTarget = document.querySelector(".peopleContainer")
    contentTarget.insertAdjacentHTML('afterbegin', witnessButton)
}


const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.class === "witnessCriminalToggle") {
        const customEvent = new CustomEvent("witnessToggleClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("witnessToggleClicked", event => { //listen for the custom event created above

        render(matchingCriminals) //put those filtered criminals on the web page
    
}
)  