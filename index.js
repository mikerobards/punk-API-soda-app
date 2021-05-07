// variable
const urlBase = "https://api.punkapi.com/v2/beers"
const beersDiv = document.getElementById('beers')

async function getBeers() {
    const res = await fetch(urlBase)
    const data = await res.json()

    console.log(data)

    data.forEach(beer => {
        const div = document.createElement('div')
        div.innerHTML = `<p>${beer.name}</p>`
        console.log(div)
        beersDiv.appendChild(div)
    })


}

getBeers()