// variable
const urlBase = "https://api.punkapi.com/v2/beers"
const beersDiv = document.querySelector('.beers')

async function getBeers() {
    const beerPromise = await fetch(urlBase)
    const beers = await beerPromise.json()

    console.log(beers)

    let beersHTML = ''

    beers.forEach(beer => {
        beersHTML += `
            <h3>${beer.name}</h3>
        `
    })

    beersDiv.innerHTML = beersHTML

}

getBeers()