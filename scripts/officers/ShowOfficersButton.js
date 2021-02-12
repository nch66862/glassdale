const officersButton = '<button id="officerToggle" class="navButton">Officers Data</button>'

export const ShowOfficersButton = () => {
    const contentTarget = document.querySelector("nav")
    contentTarget.innerHTML += officersButton
}

const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "officerToggle") {
        const customEvent = new CustomEvent("showOfficersClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("peopleContainerChanged", event => { //listen for the custom event from ConvictionSelect.js
    const theFacilitiesButton = document.querySelector("#officerToggle");
    if (event.detail.informationRendered === "Officers") {
        theFacilitiesButton.style.display = "none";
    } else {
        theFacilitiesButton.style.display = "block";
    }
})