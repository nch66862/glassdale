const facilitiesButton = '<button class="facilityToggle">Facilities Data</button>'

export const ShowFacilitiesButton = () => {
    const contentTarget = document.querySelector("nav")
    contentTarget.innerHTML += facilitiesButton
}

const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.className === "facilityToggle") {
        const customEvent = new CustomEvent("showFacilitiesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("peopleContainerChanged", event => { //listen for the custom event from ConvictionSelect.js
    const theFacilitiesButton = document.querySelector(".facilityToggle");
    if (event.detail.informationRendered === "Facilities") {
        theFacilitiesButton.style.display = "none";
    } else {
        theFacilitiesButton.style.display = "block";
    }
})