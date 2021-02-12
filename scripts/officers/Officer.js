export const Officer = (officerObj, arrayOfArrestedCriminals) => {
    return `
        <article class="officerCard">
            <h4 class="facility--${officerObj.id}">${officerObj.name}</h6>
            <p>Arrested Peoples:</p>
            <ul>
                ${arrayOfArrestedCriminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
            </ul>
        </article>
    `
  }  