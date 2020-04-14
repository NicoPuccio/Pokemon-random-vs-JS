//getPokemon(30);
let list = document.querySelector("#pokemonList");


function getPokemon(id, num)
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((pokemon) => createPokemon(pokemon, num));
}

function getRandomPokemons()
{
    let firstId = Math.round(Math.random() * 386);
    let secondId = Math.round(Math.random() * 386);

    getPokemon(firstId, 1);
    getPokemon(secondId,2);
}

function createPokemon(pokemon, num) 
{
    //convert data to HTML
    let item = list.querySelector(`#poke-${num}`);
    let img = item.getElementsByTagName("img")[0];
    img.setAttribute("src", pokemon.sprites.front_default);
    let name = item.getElementsByTagName("p")[0];
    name.textContent = pokemon.name;
    let types = list.querySelector(`#pokemon-types-${num}`);
    types.innerText = getPokemonTypes(pokemon);
    getPokemonTypes(pokemon);
    movesButtons(pokemon, num);
}
getRandomPokemons();
refreshButton();

function refreshButton()
{
    let refreshBtn = document.querySelector("#refresh-Button");
    refreshBtn.addEventListener("click", (e) => getRandomPokemons());
}

function movesButtons(pokemon, num)
{
    let moveBtn = document.querySelector(`#move-button-${num}`);
    getMaxMovesNumber(pokemon);
    moveBtn.textContent = pokemon.moves[getRandomInt(0,getMaxMovesNumber(pokemon))].move.name;
}

function getPokemonTypes(pokemon)
{
    let result = "";
    for (let i = 0; i < pokemon.types.length; i++) {
        result = result.concat(pokemon.types[i].type.name).concat(" ");
    }
    return result;
}


function getMaxMovesNumber(pokemon)
{
    return pokemon.moves.length;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}