const witnessButton = '<button class="witnessToggle">Show Witnesses</button>'

export const ShowWitnessButton = () => {
    const contentTarget = document.querySelector("nav")
    contentTarget.innerHTML += witnessButton
}

const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.className === "witnessToggle") {
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})