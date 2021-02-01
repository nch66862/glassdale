const witnessButton = '<button class="witnessCriminalToggle">Show Witnesses</button>'

export const ShowWitnessButton = () => {
    const contentTarget = document.querySelector("nav")
    contentTarget.innerHTML = witnessButton
}

const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.className === "witnessCriminalToggle") {
        const customEvent = new CustomEvent("witnessToggleClicked")
        eventHub.dispatchEvent(customEvent)
    }
})