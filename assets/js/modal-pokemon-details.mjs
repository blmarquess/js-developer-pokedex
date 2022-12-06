const modalPokemonDetails = document.querySelector("#modalPokemonDetails");

const populateModalPokemonDetails = (pokemon) => {
  modalPokemonDetails.innerHTML = `
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>${pokemon.name}</h2>
                <span class="close">&times;</span>
            </div>
            <div class="modal-body">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                <ol class="types">
                    ${pokemon.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join("")}
                </ol>
            </div>
        </div>
    </div>
    `;
};
