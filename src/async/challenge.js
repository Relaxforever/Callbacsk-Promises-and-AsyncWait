const fetchData = require('../utils/fetchdata');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherfunction = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (err) {
        console.error(err);
    }
}

console.log('Before');
anotherfunction(API);
console.log('After');