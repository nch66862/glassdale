let criminals = [] //create empty array to store fetched criminals

export const getCriminals = () => { //function to initially gather the criminal data from online
  
  return fetch("https://criminals.glassdale.us/criminals") //gets a big long string of criminal data
  .then(response => response.json()) //converts the data to correct notation
  .then(parsedResponse => {
    
    criminals = parsedResponse //put that formatted data in my variable
    
  }
  )
}

export const useCriminals = () => { //created a function to store a copy of the data and access it from another file.
  return criminals.slice()
}