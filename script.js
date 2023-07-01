const pokeFoto = document.getElementById("PokeImg");
const pokeNome = document.getElementById("PokeNome");
const btnProx = document.getElementById("btnProx");
const btnAnt = document.getElementById("btnAnt");
let trocaPoke = 1;


const buscaPokemon = async (pokemon) => {
    const apiResposta = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await apiResposta.json();
    

    

    return data;
}

const renderizaPokemon = async(pokemon) => {
const data = await buscaPokemon(pokemon);
pokeNome.innerHTML = data.name;
pokeId = data.id

console.log(pokeId);

    console.log(pokeNome);
pokeFoto.src = data ["sprites"]["back_default"]
    
}


 btnProx.addEventListener("click", () => {
    trocaPoke += 1
    renderizaPokemon(trocaPoke);
 })

 renderizaPokemon(trocaPoke);


 btnAnt.addEventListener("click", () => {
    trocaPoke -= 1
    renderizaPokemon(trocaPoke);
 });

 renderizaPokemon(trocaPoke);






