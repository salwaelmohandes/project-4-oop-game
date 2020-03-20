/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//  Create game class that initializes the properties which track 
// the number of missed guesses by the player and the phrases.

class Game {
    constructor(){
        this.missed=0;
        this.phrases = [new Phrase("Piece of cake"),
                        new Phrase("As warm as toast"),
                        new Phrase("Roasted to a turn"),
                        new Phrase("Variety is the spice of life"),
                        new Phrase("Greatest thing since sliced bread")];               
        this.activePhrase = null;
    }

// Hides the start screen overlay, calls the getRandomPhrase() method, 
// and sets the activePhrase property with the chosen phrase. 
// It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
    
    startGame(){
        const overlay=document.getElementById("overlay");
        overlay.style.display='none'; 
        const selectedPhrase = this.getRandomPhrase();
        selectedPhrase.addPhraseToDisplay();
        this.activePhrase = selectedPhrase;
        selectedPhrase.matched=[];
    }
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }

// Checks to see if the button clicked by the player matches a letter in the phrase, 
// and then directs the game based on a correct or incorrect guess. 
    
    handleInteraction(button){
        button.disabled=true;
        if(!this.activePhrase.checkLetter(button.textContent)){
            button.classList.add('key','wrong');
            this.removeLife();
        }else{
            button.classList.add('key','chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()) {
                this.gameOver();
            }
        }         
    }

// The same previous method but for the physical keyboard use.

    handleKeyDownInteraction(letter) { 
        let buttons = document.getElementsByClassName("key");
        let button;
        for(let i=0; i<buttons.length; i+=1) {
            if (buttons[i].textContent === letter) {
                button = buttons[i];    
            }
        }
        if(!this.activePhrase.checkLetter(letter)){
            button.classList.add('key','wrong');
            this.removeLife();
        }else{
            button.classList.add('key','chosen');
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
                this.gameOver();
            }
        } 
    }
    checkForWin(){
        return document.getElementsByClassName("hide").length == 0;
    }

    removeLife(){
        let hearts=document.getElementsByClassName("tries");
        hearts[this.missed].childNodes[0].src="images/lostHeart.png";
        this.missed+=1
        if(this.missed===5){
            this.gameOver();
        }
    }

    // displays the original start screen overlay and update it for win or lose.
    gameOver(){
        let h1= document.getElementById("game-over-message");
        h1.style.fontSize = '3em';
        h1.style.color='#5F4756';
        const overlay=document.getElementById("overlay");
        overlay.style.display='';  
            if(this.checkForWin()){
            overlay.classList.add('win');
            h1.textContent="!!**You Win**!!";  
            }else{
            overlay.classList.add('lose');
            h1.textContent="Game Over!";   
        }
        this.reset();
    }
    
// reset the gameboard between games after a game is completed.

    reset() {
        let ul = document.getElementsByTagName("ul");
        ul[0].innerHTML='';
        const button=document.getElementsByClassName("key");
            for(let i=0; i<button.length; i+=1){
            button[i].disabled=false;
            button[i].classList.add("class","key");
            button[i].classList.remove("chosen");
            button[i].classList.remove("wrong");     
        } 
        let images=document.getElementsByTagName("img");
            for(let i=0; i<images.length; i+=1){
            images[i].src="images/liveHeart.png";                      
        }
    }
}