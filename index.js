'use strict';

function retrieveInput(){
    
    let breed = $('#js-input').val().toLowerCase().toString();
    if(breed.length == 0) {
        alert("You didn't enter a breed, try again");
        

        
    }
    else{
    getDogImages(breed);
    }


}

function getDogImages(type){
    
       console.log(`The breed of dog is ${type}`);
       fetch(`https://dog.ceo/api/breed/${type}/images/random`)
       .then(function(response){
           if(!response.ok){
             throw Error("This breed does not exist, try again. Please check spelling or visit https://dog.ceo/dog-api/breeds-list to get exact naming convention.");
            }
            return response;
        })
        .then(response => response.json())
       .then(responseJson => getResults(responseJson))
       .catch(error => alert(error));
       
        displayResults();
    
    
    }


function getResults(jsonMessage){
    let url = jsonMessage.message;
    console.log(url);
    $(".results").append(`<img src = "${url}" class = "img-results">`);

   // $('.img-results').replaceWith(`<img src = "${url}" class = "img-results">`);

}

function displayResults(){
    $('.results').removeClass("hidden"); 

    }  



function watchForm(){
    $("form").submit(function(){
        event.preventDefault();
        retrieveInput();
      }
    )}

$(function(){
    console.log("App ready and waiting for submit");
    watchForm();
    
});
