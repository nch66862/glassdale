eventHub.addEventListener("witnessToggleClicked", event => { //listen for the custom event from ConvictionSelect.js
    if (event.detail.crimeThatWasChosen !== "0") { //checks that something other than the top box with no value was selected
        const convictionsArray = useConvictions() // Get a copy of the array of convictions from the data provider
        const convictionThatWasChosen = convictionsArray.find(convictionObj => { // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
            return convictionObj.id === parseInt(event.detail.crimeThatWasChosen) //parseInt changes the string to a number so the data type matches. It was a string because if came from an HTML element. 
        }
        )
        const matchingCriminals = criminalArray.filter(matchingCriminal => { //find the criminals that have the same conviction
            return matchingCriminal.conviction === convictionThatWasChosen.name
        }
        )
        criminalsContainer = document.querySelector(".criminalsList") //specify where I want the filtered criminals to render
        render(matchingCriminals) //put those filtered criminals on the web page
    }
}
)
