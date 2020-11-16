pokemonRepository = (function () {
  let pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    type: ["grass", "poison"]
  },
  {
    name: "Charmander",
    height: 0.6,
    type: ["fire"]
  },
  {
    name: "Squirtle",
    height: 0.5,
    type: ["water"]
  }];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  }
})();

pokemonRepository.add(
  {
    name: "Caterpie",
    height: 0.3,
    type: ["bug"]
  }
);

function printArrayDetails(inputArray) {
  inputArray.forEach(function(input)
   {
  if (input.type == "fire") {
    document.write(input.name + " (" + input.height + ")" + "- This one's a fire type! ");
  } else {
    document.write(input.name + " (height: " + input.height + ") ");
    }
  })
}

printArrayDetails(pokemonRepository.getAll());
