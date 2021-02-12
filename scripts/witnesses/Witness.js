export const Witness = (witnessObj) => {
    return `
        <h6 class="witness--${witnessObj.id}">${witnessObj.name}</h6>
        <p>${witnessObj.statements}</p>
    `
}  