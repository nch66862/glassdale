let officers = []

export const useOfficers = () => {
  return officers.slice()
}

export const getOfficers = () => {
  /*
      Load database state into application state with a fetch().
      Make sure the last then() updates the officers array
  */
  return fetch("https://criminals.glassdale.us/officers") //importing data
    .then(response => response.json()) //format and make pretty
    .then(parsedResponse => {
      officers = parsedResponse //puts the data in an array called officers
    })

}