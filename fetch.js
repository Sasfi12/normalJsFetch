'use strict'; 
const mainFetch = document.getElementById('mainFetch');
async function fetchData(params) {
    fetch(params)
    .then((response) => response.json())
    .then((result) => result.map(function(elem) {
        
        const h2 = document.createElement("h2");
        h2.textContent = `${elem.name}`;
        mainFetch.appendChild(h2)
    }))
    .catch((error) => console.log(error));
}

fetchData('https://emojihub.yurace.pro/api/all');