// variable
const urlBase = "https://api.punkapi.com/v2/beers"
const beersDiv = document.querySelector('.beers')

async function getBeers() {
    const beerPromise = await fetch(urlBase)
    const beers = await beerPromise.json()

    console.log(beers[0])

    let beersHTML = ''

    beers.forEach(beer => {
        beersHTML += `
            <div class="beer-wrapper card">
                <div class="beer">
                    <img class="beer__img" src="${beer.image_url}">
                    <h3>${beer.name}</h3>
                    <span class="beer__info">
                        <span>ABV: ${beer.abv}%</span>
                        <span>IBU: ${beer.ibu}</span>
                    </span>
                </div>
                    <div class="beer__content">
                        <div class="beer__name">${beer.name}</div>
                        <div class="beer__tagline">${beer.tagline}</div>
                        <div class="beer__desc">${beer.description}</div>
                        <div class="beer__food-pair">
                        Pair with: ${beer.food_pairing.join('; ')}
                        </div>

                    </div>
            </div>
            
        `
    })

    beersDiv.innerHTML = beersHTML

}

getBeers()