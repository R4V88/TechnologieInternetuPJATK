"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


//Zadanie 1
function czyTrojkat(a ,b, c) {

  let numArray = [a, b, c];
  numArray.sort(sortNumber);

  if(Math.sqrt(Math.pow(numArray[0]) + Math.pow(numArray[1])) == Math.sqrt(Math.pow(numArray[2]))) {
      return console.log(true);
  } else {
      return console.log(false);
  }
}

function sortNumber(a, b){
  return a - b;
}

//Zadanie 2

function podzielne(a, b, c){
  const przedzial = new Array(b);

  for (let i = a; i <= przedzial.length; a++){
      przedzial.push[i];
  }
  for (const element in object) {
    if(element % c == 0)  
    return console.log(element);
    }
}

czyTrojkat(3, 4 ,5);
podzielne(1, 50);
