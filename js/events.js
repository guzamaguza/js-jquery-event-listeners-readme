//define functions here
function getIt(){
  $('p').on("click", function(){
      alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(){
     $('img').addClass("tasty");
     $(".tasty").css("border-color","red"); 
  });
}

function pressIt(){
  $('input').on('keydown', function(key) {
  if(key.which == 71){
      alert('s was pressed');
  }
  });
}

function submitIt(){
    $("form").on("submit", function() {
  
    alert('Your form is going to be submitted now.');
    return;
 
    });
}



$(document).ready(function(){

// call functions here

});
