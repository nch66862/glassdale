let officers = []

export const useOfficers = () => {
  return officers.slice()
}

export const getOfficers = () => {
  return fetch("https://criminals.glassdale.us/officers") //importing data
    .then(response => response.json()) //format and make pretty
    .then(parsedResponse => {
      officers = parsedResponse //puts the data in an array called officers
    })
}