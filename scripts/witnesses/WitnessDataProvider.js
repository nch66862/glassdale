let witnesses = []

export const useWitnesses = () => {
  return witnesses.slice()
}

export const getWitnesses = () => {
  return fetch("https://criminals.glassdale.us/witnesses") //importing data
    .then(response => response.json()) //format and make pretty
    .then(parsedResponse => {
      witnesses = parsedResponse //puts the data in an array called officers
    })
}