export const Criminal = (criminalObj, arrayOfRelatedFacilities) => { //takes a criminal object and uses its key-value pairs to fill in some HTML
    return `
        <article class="criminal">
            <h4>${criminalObj.name}</h4>
            <div class="criminal__details">
                <p>Age: ${criminalObj.age}</p>
                <p>Conviction: ${criminalObj.conviction}</p>
                <p>Arrested by: ${criminalObj.arrestingOfficer}</p>
                <p>Incarcerated between: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} and ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
                <div>
                    <h2>Facilities</h2>
                    <ul>
                        ${arrayOfRelatedFacilities.map(facility => `<li>${facility.facilityName}</li>`).join("")}
                    </ul>
                </div>
                <button class="associateButton" id="associates--${criminalObj.id}">Associate Alibis</button>
            </div>
        </article>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        const [prefix, criminalID] = clickEvent.target.id.split("--")
        const criminalAlibiChosenEvent = new CustomEvent("criminalAlibiChosen", {
            detail: {
                alibiID: criminalID
            }
        })
        eventHub.dispatchEvent(criminalAlibiChosenEvent)
    }
})
