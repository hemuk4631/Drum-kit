// for(var i=0; i<7; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
//   function playSound(){
//       buttonInnerHTML=this.innerHTML;
//       makeSound(buttonInnerHTML);
//   }
  
//   document.addEventListener("keydown", keyboard);
//   function keyboard(event){
//      makeSound(event.key);
//   }
  
  
      
//   function makeSound(key){
//      switch (key) {
//       case "h":
    //       var tom_4 = new Audio("sounds/tom-4.mp3");
    //       tom_4.play();
    //       break;
    //  case "e":
    //   var tom_3 = new Audio ("sounds/tom-3.mp3");
    //   tom_3.play();
    //   break;
    //   case "m":
          // var tom_2 = new Audio ("sounds/tom-2.mp3");
          // tom_2.play();
          // break;
          // case "u":
          // var tom_1 = new Audio ("sounds/tom-1.mp3");
          // tom_1.play();
          // break;
          // case "l":
          // var kickbass = new Audio ("sounds/kick-bass.mp3");
          // kickbass.play();
          // break;
          // case "t":
          // var crash = new Audio ("sounds/crash.mp3");
          // crash.play();
  //         break;
  //         case "o":
  //         var snare = new Audio ("sounds/snare.mp3");
  //         snare.play();
  //         break;
  //     default:
  //         console.log(buttonInnerHTML);
  //         break;
  //    }}
  
  // document.querySelector('.'+key).classList.add('pressed');
  
  // }
  


// for click action.

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document
        .querySelectorAll(".drum")[i]
        .addEventListener("click", function () {
            makeSound(this.innerHTML);
            console.log(this.innerHTML);
            buttonAnimation(this.innerHTML);
        });

}

// for keybord action.
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    console.log(event.key);
    buttonAnimation(event.key);
});

// action to perform.

function makeSound(key) {
    switch (key) {
        case "h":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "e":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "m":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "u":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "t":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "o":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton
        .classList
        .add("pressed");
    setTimeout(function () {
        activeButton
            .classList
            .remove("pressed")
    }, 100);
}
