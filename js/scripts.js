let pokemonRepository = (function () {
  let modalContainer = document.querySelector('.modal-container');

  let repository = [];
  let apiUrl ='https://pokeapi.co/api/v2/pokemon/?limit=151';

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

  function showDetails(pokemon){
    loadDetails(pokemon).then(function (){
      console.log(pokemon)

      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'X';
      closeButtonElement.addEventListener('click', hideModal);

      let titleElement = document.createElement('h1');
      titleElement.innerText = pokemon.name;

      let contentElement = document.createElement('p');
      contentElement.innerText = 'height: ' + pokemon.height;

      let imageElement = document.createElement('img');
      imageElement.src = pokemon.imageUrl;

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(imageElement);
      modalContainer.appendChild(modal);
      modalContainer.classList.add('is-visible');
    });
  }

    function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
      hideModal();
    }
  });


  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then (function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  };

  function loadDetails(item) {
    let url = item.detailsUrl
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();



pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon)
  })
})
