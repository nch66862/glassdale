let criminals = []

export const useCriminals = () => {
  return criminals.slice()
}

export const getCriminals = () => {
  /*
      Load database state into application state with a fetch().
      Make sure the last then() updates the officers array
  */
  return fetch("https://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(parsedResponse => {
      criminals = parsedResponse
    })

}