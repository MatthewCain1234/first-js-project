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
  }
];

function printArrayDetails(inputArray) {
  for (i=0;i<pokemonList.length;i++) {
  if (inputArray[i].type == "fire") {
    document.write(inputArray[i].name + " (" + inputArray[i].height + ")" + "- This one's a fire type! ");
  } else {
    document.write(inputArray[i].name + " (height: " + inputArray[i].height + ") ");
    }
  }
}

printArrayDetails(pokemonList);
printArrayDetails(pokemonList);
