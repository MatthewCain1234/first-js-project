let pokemonRepository = (function () {
  let repository = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ["fire", "flying"],
    },
    {
      name: "Squirtle",
      height: 1,
      types: ["water"],
    },
  ];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    function details(pokemon) {
      return showDetails(pokemon);
    }
    button.addEventListener('click', () => details(pokemon))
  }

  function showDetails(pokemon) {
    console.log('pokemon name:', pokemon.name)
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add(
  {
    name: "Caterpie",
    height: 0.3,
    type: ["bug"]
  }
);

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)
});
