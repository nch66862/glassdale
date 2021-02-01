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
    const theCriminalButton = document.querySelector(".criminalToggle");
    if (event.detail.informationRendered === "Criminals") {
        theCriminalButton.style.display = "none";
    } else {
        theCriminalButton.style.display = "block";
    }
})