/* Un alert espone 5 numeri casuali.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt
alla volta i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software
dice quanti e quali dei numeri da indovinare sono
stati individuati */

$(function(){

  var nRandom = 0;
  var listaN = [];

  // Un alert espone 5 numeri casuali diversi tra loro.
  for(var i = 0; listaN.length < 5; i++){
    nRandom = Math.floor(Math.random() * 100) + 1;;
    if(listaN.includes(nRandom)){
      nRandom;
    }
    else{
      listaN.push(nRandom);
    }
  }
  alert("I tuoi numeri sono:  " + listaN.join("  "));
  // Un alert espone 5 numeri casuali diversi tra loro.


});