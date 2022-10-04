var numberOfHarmoniumKeys = document.querySelectorAll(".harmoniumKeys").length;

for (var i = 0; i < numberOfHarmoniumKeys; i++) {

  document.querySelectorAll(".harmoniumKeys")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "z":
      var niLow = new Audio("sounds/niLow.mp3");
      niLow.play();
      break;

    case "s":
      var sa = new Audio("sounds/sa.mp3");
      sa.play();
      if(sa.currentTime>1){
          
        sa.pause();
      }
      break;

    case "d":
      var re = new Audio('sounds/re.mp3');
      re.play();
      break;

    case "c":
      var ga = new Audio('sounds/ga.mp3');
      ga.play();
      break;

    case "f":
      var ma = new Audio('sounds/ma.mp3');
      ma.play();
      break;

    case "g":
      var pa = new Audio('sounds/pa.mp3');
      pa.play();
      break;

    case "b":
      var dha = new Audio('sounds/dha.mp3');
      dha.play();
      break;

    case "n":
      var ni = new Audio('sounds/ni.mp3');
      ni.play();
      break;


    case "j":
      var saHigh = new Audio('sounds/saHigh.mp3');
      saHigh.play();
      break;

    

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
