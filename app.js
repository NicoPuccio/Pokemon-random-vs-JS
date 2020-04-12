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
    let moveBtn1 = document.querySelector("#move-button-1");
    moveBtn1.textContent = pokemon.moves[1].move.name;
    let moveBtn2 = document.querySelector("#move-button-2");
    moveBtn2.textContent = pokemon.moves[1].move.name;
}

