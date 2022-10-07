//Mouse Event
var numberOfDrumButtom = document.querySelectorAll(".drum").length
console.log("numberOfDrumButtom:"+numberOfDrumButtom);

for(let i =0; i<numberOfDrumButtom ;i++){
     document.querySelectorAll(".drum")[i].addEventListener('click',
     function (){  //anonymous function
          console.log(this);
          var buttonInnerHTML=this.innerHTML;
          console.log(buttonInnerHTML);
          makeSound(buttonInnerHTML);
     });
}

//Keyboard Keypress
document.addEventListener('keypress',
     function (event){
          console.log(event);
          console.log(event.key);
          makeSound(event.key);
     }
);

function makeSound(key){
    switch(key){
       case 's':
            var musicObject = new Audio('assets/music/tom-1.mp3'); // tom1 is Object
            musicObject.play();
       break;
       case 'r':
            var musicObject = new Audio('assets/music/tom-2.mp3'); // tom1 is Object
            musicObject.play();
       break;
       case 'g':
            var musicObject = new Audio('assets/music/tom-3.mp3'); // tom1 is Object
            musicObject.play();
       break;
       case 'm':
            var musicObject = new Audio('assets/music/tom-4.mp3'); // tom1 is Object
            musicObject.play();
       break;
       case 'p':
            var musicObject = new Audio('assets/music/snare.mp3'); // tom1 is Object
            musicObject.play();
       break;
       case 'd':
            var musicObject = new Audio('assets/music/crash.mp3'); // tom1 is Object
            musicObject.play();
       break;
       case 'n':
            var musicObject= new Audio('assets/music/kick-bass.mp3'); // tom1 is Object
            musicObject.play();
       break;

    }
}