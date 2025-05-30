'use strict'; 
const mainFetch = document.getElementById('mainFetch');
async function fetchData(params) {
    fetch(params)
    .then((response) => response.json())
    .then((result) => 
        result.map(function(elem) {
        console.log(elem)
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${elem.name}</h2>
        <h3>${elem.htmlCode[0]}</h3>
        <hr></hr>`;
        mainFetch.appendChild(div);
    }))
    .catch((error) => console.log(error));
}

fetchData('https://emojihub.yurace.pro/api/all');