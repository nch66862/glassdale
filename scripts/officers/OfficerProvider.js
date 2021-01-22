let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    //request the data -- fetch
    //convert the JSON string response to a JavaScript data structure (object or array) -- first .then
    //do something with the data -- second .then
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}