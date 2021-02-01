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

eventHub.addEventListener("peopleContainerChanged", event => { //listen for the custom event from ConvictionSelect.js
    const theWitnessButton = document.querySelector(".witnessToggle");
    if (event.detail.informationRendered === "Witnesses") {
        theWitnessButton.style.display = "none";
    } else {
        theWitnessButton.style.display = "block";
    }
})