let pokemon = [];
console.log(pokemon)

const drawPokemon = (pokemon) => {
    const pokemonContainer$$ = document.querySelector("#container-pokemon");
    

    // Crear un nuevo div para cada Pokémon
    const pokemonDiv$$ = document.createElement("div");
    pokemonDiv$$.classList.add("pokemon");

    const pokemonpictures$$ = document.createElement("p");
    pokemonpictures$$.textContent = `ID: ${pokemon.id} - ${pokemon.name}`;

    const pokemonStats$$ = document.createElement("ul");
    for(let stat of pokemon.stats) {
        const statLi$$ = document.createElement("li");
        statLi$$.textContent = `${stat.stat.name} - ${stat.base_stat}`;
    
        pokemonStats$$.appendChild(statLi$$);
    }


    const imagesPokemon$$ = document.createElement("img");
    imagesPokemon$$.src = pokemon.sprites.front_default;
    imagesPokemon$$.alt = `${pokemon.name}`;

    pokemonDiv$$.appendChild(pokemonpictures$$);
    pokemonDiv$$.appendChild(imagesPokemon$$);
    pokemonDiv$$.appendChild(pokemonStats$$);

    pokemonContainer$$.appendChild(pokemonDiv$$);
};



const getPokemon = async () => {
    for (let i = 1; i < 151; i++) {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        let pokemonJson = await response.json();
        pokemon.push(pokemonJson);

        drawPokemon(pokemonJson);
    }
};
getPokemon();

const filterNamePokemon = () => {
    const filterName$$ = document.querySelector("#pokemon-filter").value.trim().toLowerCase();
    const pokemonContainer$$ = document.querySelector("#container-pokemon");

    // Limpiar el contenedor
    pokemonContainer$$.innerHTML = "";

    // Filtrar y pintar solo los Pokémon que coinciden con el nombre
    const pokemonFilterName = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(filterName$$));
    

    for(let i = 0; i < pokemonFilterName.length; i++) {
        drawPokemon(pokemonFilter[i]);
    }
   
}

document.querySelector("#btn-filter-name").addEventListener("click", filterNamePokemon);



const filterType = (tipo) => {
    const pokemonContainer$$ = document.querySelector("#container-pokemon");

    // Limpiar el contenedor antes de aplicar el filtro
    pokemonContainer$$.innerHTML = "";

    // Filtrar y pintar solo los Pokémon que coinciden con el tipo
    const pokemonesFilterType = pokemon.filter(pokemon => {
        const tipos = pokemon.types.map(type => type.type.name);
        return tipo === "" || tipos.includes(tipo);
    });
    for (let i = 0; i < pokemonesFilterType.length; i++) {
        drawPokemon(pokemonesFilterType[i]);
    }
}

const imgFilters$$ = document.querySelector("resert-img");

imgFilters$$.addEventListener("click", () => {
    resertFilter();
});

function resertFilter() {
    // Código para deshacer los filtros y mostrar todos los Pokémon nuevamente
    const pokemonContainer$$ = document.querySelector("#container-pokemon");
    pokemonContainer$$.innerHTML = "";

    // Vuelve a pintar todos los Pokémon
    for (let i = 0; i < pokemon.length; i++) {
    drawPokemon(pokemon[i]);
}
}




const init = async () => {


};
init();


