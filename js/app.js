/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
game.createPhrases();


document.getElementById("btn__reset").addEventListener('click',(e)=>{
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click',(e)=>{   
       
    if (e.target.tagName==='BUTTON'){    
    game.handleInteraction(e.target);        
    }
    
});

document.addEventListener('keydown',(event)=>{
    if (event.key){
        game.handleKeyDownInteraction(event.key);
    }
});


     
