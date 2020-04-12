//getPokemon(30);


function getPokemon(id, num){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((pokemon) => console.log(pokemon.name));
}

function getRandomPokemons()
{
    let firstId = Math.round(Math.random() * 386);
    let secondId = Math.round(Math.random() * 386);

    getPokemon(firstId, 1);
    getPokemon(secondId,2);
}
getRandomPokemons();