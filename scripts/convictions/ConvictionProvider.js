let convictions = [] //create empty array to store a copy of the conviction objects

export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes") //get a long string of conviction data from the internet
  .then(response => response.json()) //put it in javascript notation so we can use it as an array of objects
  .then(parsedResponse => {
    convictions = parsedResponse //put the array in our convictions variable
  })
}

export const useConvictions = () => convictions.slice() //store the array in a function I can access from another file