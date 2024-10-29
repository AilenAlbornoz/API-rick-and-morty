const apiUrl = 'https://rickandmortyapi.com/api/character';

async function fetchCharacters() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayCharacters(characters) {
    const characterList = document.getElementById('character-list');
    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'card';

        const characterImage = document.createElement('img');
        characterImage.src = character.image;
        characterImage.alt = character.name;

        const characterName = document.createElement('h2');
        characterName.textContent = character.name;

        const characterStatus = document.createElement('p');
        characterStatus.textContent = `Estado: ${character.status}`;

        const characterSpecies = document.createElement('p');
        characterSpecies.textContent = `Especie: ${character.species}`;

        const characterGender = document.createElement('p');
        characterGender.textContent = `Género: ${character.gender}`;

        card.appendChild(characterImage);
        card.appendChild(characterName);
        card.appendChild(characterStatus);
        card.appendChild(characterSpecies);
        card.appendChild(characterGender); 
        characterList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', fetchCharacters);
