const fetchdata = require('../utils/fetchdata');
const API = 'https://rickandmortyapi.com/api/character/';

fetchdata(API)
.then(data => {
    console.log(data.info.count);
    return fetchdata(`${API}${data.results[0].id}`)
})
.then(data => {
    console.log(data.name)
    return fetchdata(data.origin.url)
})
.then(data => {
    console.log(data.dimension)
})
.catch(err => console.error(err));