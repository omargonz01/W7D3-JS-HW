// const pokeForm = 
// querySelector('form')
// pokeForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(pokeForm)
// pokeDeetz(pokeName)
// })
// const pokeData = async (name) => {
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    // const data = await response.json()
    // console.log(data)
// const pokemonName = document.getElementById("Form")
// getPokemon(Name);


const pokeForm = document.querySelector('form')
pokeForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(pokeForm)
    const pokeName = pokeForm[0].value
    pokeDeetz(pokeName)
})

const pokeDeetz = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    // console.log(data)
    const pokeInfo = document.getElementById("pokeInfo")
    const ability = data.abilities[0].ability.name
    const move1 = data.moves[0].move.name
    const baseExperience = data.base_experience
    // .innerHTML - creates new code 
    pokeInfo.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}">
        <p>My Ability: ${ability}</p>
        <p>Sick Move: ${move1}</p>
        <p>Base experience: ${baseExperience}</p>
    `;
}

// dont need to .append since we are using the innerHTML...
// i thought .append was needed since were creating new elements, but its creating new values on each 
// search so it is not needed. innerHTML is the answer
// // const pokeData = async (name) => {
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    // const data = await response.json()

// const abilities = data.abilities.map (ability) => (ability.name).append()
// pokemonInfo.innerHTML = `
// <h2>${data.name}</h2>
// <img src="${data.sprites.front_default}" >

// <ul>
//     ${abilities.map(ability) => `${ability}.append()`)}
// </ul>

// 
const testBtn = document.createElement('button')
testBtn.innerText = 'click to see what happens'

document.body.append(testBtn)

testBtn.addEventListener('click', () => {
    testBtn.style.backgroundColor = 'pink';
});

let rotated = false;

testBtn.addEventListener('click', () => {
    if (rotated) {
        testBtn.style.transform = 'rotate(0deg)'
    } else {
        testBtn.style.transform = 'rotate(180deg)'
    }
    rotated = !rotated;
});


testBtn.addEventListener('click', () => {
    testBtn.style.fontSize = '20px';
});

