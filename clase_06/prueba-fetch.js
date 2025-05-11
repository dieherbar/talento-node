const config = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token',
    },
    //body: JSON.stringify({ key: 'value' }),
};
fetch('https://rickandmortyapi.com/api/character', config)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));