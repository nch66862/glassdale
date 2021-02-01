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