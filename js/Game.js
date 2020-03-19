/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor(){
        this.missed=0;
        this.phrases=[];
        this.activePhrase=null;
        // this.activePhrase.matched=[];
    }
    createPhrases(){
        this.phrases=[new Phrase("Variety is the spice of life"),
                    new Phrase("Greatest thing since sliced bread"),
                    new Phrase("Piece of cake"),
                    new Phrase("As warm as toast"),
                    new Phrase("Roasted to a turn")]
        return this.phrases;    
        }

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

    handleKeyDownInteraction(letter) { 
        let buttons = document.getElementsByClassName("key");
        let button;
        for(let i=0; i<buttons.length; i+=1) {
            if (buttons[i].textContent === letter) {
                button = buttons[i];
            }
        }
        button.disabled=true;
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

    gameOver(){
        let h1= document.getElementById("game-over-message");
        h1.style.fontSize = '3em';
        h1.style.color='#5F4756';
        const overlay=document.getElementById("overlay");
        overlay.style.display='';  
            if(this.checkForWin()){
            overlay.style.backgroundColor='#12B968';
            h1.textContent="!!**You Win**!!";  
            }else{
            overlay.style.backgroundColor='#F5466B';
            h1.textContent="Game Over!";   
        }
        this.reset();
    }
    
    // reset the gameboard between games after a game is completed.
    reset(){
        ul.removeChild(ul.firstChild);
        ul.innerHTML='';
        const button=document.getElementsByClassName("key");
            for(let i=0; i<button.length; i+=1){
            button[i].disabled=false;
            button[i].classList.add("class","key");
            button[i].classList.remove("chosen");
            button[i].classList.remove("wrong");     
        } 
        this.missed=0;
        let images=document.getElementsByTagName("img");
            for(let i=0; i<images.length; i+=1){
            images[i].src="images/liveHeart.png";                      
        }
    }
}