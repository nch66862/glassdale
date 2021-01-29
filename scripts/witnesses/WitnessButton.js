const witnessButton = '<button class="witnessCriminalToggle">Show Witnesses</button>'

export const ShowWitnessButton = () => {
    const contentTarget = document.querySelector(".peopleContainer")
    contentTarget.insertAdjacentHTML('afterbegin', witnessButton)
}