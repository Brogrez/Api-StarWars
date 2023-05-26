//VARIABLES
let personajesStarWars = []

let principal = document.getElementById('principal')
let secundario = document.getElementById('secundario')
let terciario = document.getElementById('terciario')

let bloquePrincipal = document.getElementById('bloquePrincipal')
let bloqueSecundario = document.getElementById('bloqueSecundario')
let bloqueTerciario = document.getElementById('bloqueTerciario')


let indexPrincipal = 0
let indexSecundario = 5
let indexTerciario = 10

//FUNCIONES
async function apiStarWars(){
    const page1 = await fetch(`https://swapi.dev/api/people`)
    const respuesta = await page1.json()
    arregloStarWars(respuesta.results)
    
    const page2 = await fetch(`https://swapi.dev/api/people/?page=2`)
    const respuesta2 = await page2.json()
    arregloStarWars(respuesta2.results)
}

function arregloStarWars(datosApi){
        datosApi.map(personaje => {
        personajesStarWars.push(personaje)
        })
        console.log(personajesStarWars)
}

function Principales(){
    let posicion = personajesStarWars[indexPrincipal]
    if(indexPrincipal <= 4){
        let crearDiv = document.createElement('div')
        crearDiv.innerHTML = `
            <h3 class="personaje__texto">${posicion.name}</h3>
            <p class="personaje__texto">estatura:${posicion.height}Cm</p>
            <p class="personaje__texto">peso:${posicion.mass}Kg</p>
        `
        crearDiv.setAttribute('class', 'bloque personaje')
        bloquePrincipal.appendChild(crearDiv)
        indexPrincipal++
    }
}

function Secundarios(){
    let posicion = personajesStarWars[indexSecundario]
    if(indexSecundario <= 9){
        let crearDiv = document.createElement('div')
        crearDiv.innerHTML = `
            <h3 class="personaje__texto">${posicion.name}</h3>
            <p class="personaje__texto">estatura:${posicion.height}Cm</p>
            <p class="personaje__texto">peso:${posicion.mass}Kg</p>
        `
        crearDiv.setAttribute('class', 'bloque personaje')
        bloqueSecundario.appendChild(crearDiv)
        indexSecundario++
    }
}

function Terciarios(){
    let posicion = personajesStarWars[indexTerciario]
    if(indexTerciario <= 14){
        let crearDiv = document.createElement('div')
        crearDiv.innerHTML = `
            <h3 class="personaje__texto">${posicion.name}</h3>
            <p class="personaje__texto">estatura:${posicion.height}Cm</p>
            <p class="personaje__texto">peso:${posicion.mass}Kg</p>
        `
        crearDiv.setAttribute('class', 'bloque personaje')
        bloqueTerciario.appendChild(crearDiv)
        indexTerciario++
    }
}




//EVENTOS
window.addEventListener("DOMContentLoaded",() =>{
    apiStarWars()
});

principal.addEventListener('click', Principales)
secundario.addEventListener('click', Secundarios)
terciario.addEventListener('click', Terciarios)

