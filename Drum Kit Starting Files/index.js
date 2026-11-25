// we use the for loop to add the click event listener to each button becuase
// querySelectorAll returns a list/array of all the buttons with the class 'drum'
const drum = document.querySelectorAll('.set .drum');
for (let i = 0; i < drum.length; i++) {
    drum[i].addEventListener('click', handleClick);
}

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    
    switchFunction(event.key);
});

function handleClick() {
    this.style.color = 'white';

    switchFunction(this.innerHTML);
    
    
}

function switchFunction(keyg){
        switch (keyg) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break; 
        
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        
    }
    }