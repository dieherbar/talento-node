import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character'; // URL de la API de Rick and Morty
const args = process.argv.slice(2); // Ignoramos los dos primeros elementos con slice

axios.get(url)
    .then((response) => {
        console.log('GET:', response.data);        
    })
    .catch((error) => {
        console.error('Failed to fetch data from API:', error.message);
    });