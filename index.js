'use strict';

function inputListen() {
  $('#doggieForm').on('submit', function(event) {
    $('.dogResults').empty();
    event.preventDefault();
    let dogInput = $('#inputBreed').val();
    getDogPics(dogInput);
  });
}

function getDogPics(dogInput) {
  fetch(`https://dog.ceo/api/breed/${dogInput}/images/random`)
  .then(response => 
    {return response.json();
  })
  .then(responseJSON => { 
    if (responseJSON.status == "error") { 
          console.log(responseJSON.status);
          alert ("Breed not found.  Try another!");
        } else if (responseJSON.status == "success") {
          console.log(responseJSON);
          return showBreeds(responseJSON);
        }})
       .catch(error => console.log(error));
  }

function showBreeds(responseJSON) {
  $('.dogResults').append(`<img src="${responseJSON.message}">`);
}

$(function() {
  console.log('App loaded! Waiting for submit!');
});

inputListen();