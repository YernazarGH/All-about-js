"use strict";
let inputKZT = document.getElementById('tenge'),
    inputUSD = document.getElementById('dollar');

inputKZT.addEventListener('input', function() {
    let request = new XMLHttpRequest();

    request.open('GET', './current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inputUSD.value = inputKZT.value / data.usd;
        }else{
            inputUSD.value = 'что то пошло не так';
        };
    });
});