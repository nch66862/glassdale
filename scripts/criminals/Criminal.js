export const Criminal = (criminalObj) => {
    return `
        <article class="criminal">
            <h4>${criminalObj.name}</h4>
            <p>Age: ${criminalObj.age}</p>
            <p>Conviction: ${criminalObj.conviction}</p>
            <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </article>
    `
  }  