let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchdata(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4 && xhttp.status === 200){
            callback(null, JSON.parse(xhttp.responseText))
        }/*** Siempre esta llendo al else
        tengo que ver como arreglarlo despues
          else {
            const error = new Error('Error ' + url_api)
            return callback(error, null) 
        }
        */
    }
    xhttp.send();
}

fetchdata(API, function (err1, data1) {
    if (err1) return console.error(err1);
    fetchdata(API + data1.results[0].id, function (err2, data2) {
        if (err2) return console.error(err2);
        fetchdata(data2.origin.url, function (err3, data3) {
            if (err3) return console.error(err3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})