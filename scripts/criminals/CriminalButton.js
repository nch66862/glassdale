const criminalButton = '<button class="criminalToggle">Show All Criminals</button>'

export const ShowCriminalButton = () => {
    const contentTarget = document.querySelector("nav")
    contentTarget.innerHTML += criminalButton
}

const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.className === "criminalToggle") {
        const customEvent = new CustomEvent("showCriminalsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("peopleContainerChanged", event => { //listen for the custom event from ConvictionSelect.js
    const theWitnessButton = document.querySelector(".witnessToggle");
    if (event.detail.informationRendered === "Witnesses") {
        theWitnessButton.style.display = "none";
    } else {
        witnessButton.style.display = "block";
    }
})