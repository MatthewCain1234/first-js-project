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
]

for (i=0;i<pokemonList.length;i++) {
  if (pokemonList[i].type == "fire") {
    document.write(pokemonList[i].name + " (" + pokemonList[i].height + ")" + "- This one's a fire type! ")
  } else {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") ")
  }
}
