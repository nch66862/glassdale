const criminalButton = '<button id="criminalToggle" class="navButton">Criminal Database</button>'

export const ShowCriminalButton = () => {
    const contentTarget = document.querySelector("nav")
    contentTarget.innerHTML += criminalButton
}

const eventHub = document.querySelector(".container") //specify the outer container as the event hub

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "criminalToggle") {
        const customEvent = new CustomEvent("showCriminalsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("peopleContainerChanged", event => { //listen for the custom event from ConvictionSelect.js
    const theCriminalButton = document.querySelector("#criminalToggle");
    if (event.detail.informationRendered === "Criminals") {
        theCriminalButton.style.display = "none";
    } else {
        theCriminalButton.style.display = "block";
    }
})