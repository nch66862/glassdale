export const Facility = (FacilityObj, arrayOfCriminalNames) => {
    return `
        <h4 class="facility--${FacilityObj.id}">${FacilityObj.facilityName}</h6>
        <p>Security Level: ${FacilityObj.securityLevel}</p>
        <p>Capacity: ${FacilityObj.capacity} inmates</p>
        <p>Contained Glassdale Criminals:</p>
        <ul>
            ${arrayOfCriminalNames.map(name => `<li>${name}</li>`).join("")}
        </ul>
    `
}  