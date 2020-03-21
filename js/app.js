/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;

// Start game.
document.getElementById("btn__reset").addEventListener('click',(e)=>{
    game = new Game();
    game.startGame();
});

// Clicking functionalty of the onscreen keyboard buttons 
// not the space between them by using the if statement inside the event listener.

document.getElementById('qwerty').addEventListener('click',(e)=>{     
    if (e.target.tagName==='BUTTON'){  
    game.handleInteraction(e.target); 
    }    
});

// Let players use their physical computer keyboard to enter guesses.

document.addEventListener('keydown',(event)=>{
    if(game !== null && game.missed !== 5 && (/^[a-z]$/).test(event.key)) {
    game.handleKeyDownInteraction(event.key);
    }
});


     
