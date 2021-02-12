export const Facility = (FacilityObj) => {
    return `
        <h6 class="witness--${FacilityObj.id}">${FacilityObj.name}</h6>
        <p>${FacilityObj.statements}</p>
    `
}  