'use strict';

function retrieveInput(){
    
    let howMany = $('#js-input').val();
    console.log(`You chose to display ${howMany} dogs!`);
    if(howMany >= 1 && howMany <= 50){
        getDogImages(howMany);
    }
    else{
     let howMany = 3;
      getDogImages(howMany);
    }

}

function getDogImages(numOfDogs){
    for(let i = 1; i <= numOfDogs; i++){
       fetch('https://dog.ceo/api/breeds/image/random').
       then(response => response.json()).
       then(responseJson => displayResults(responseJson)).
       catch(alert("Sorry an unexpected error occured. Try again later."));

    }
}
    

function displayResults(jsonMessage){
    $('img-results').replaceWith(`<img src = "${jsonMessage}" class = "img-results">`);
    $('results').removeClass("hidden");
}



function watchForm(){
    $("form").submit(function(){
        event.preventDefault();
        retrieveInput();
      }
    )}

$(function(){
    console.log("App ready and waiting for submit");
    retrieveInput();

});