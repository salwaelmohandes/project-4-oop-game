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

    handleInteraction(letter){
        if(this.activePhrase.checkLetter(letter)){
            this.activePhrase.showMatchedLetter(letter);        
            if(this.checkForWin()) {
                this.gameOver();
            } else {
                this.removeLife();
            }  
        } else {
            this.missed += 1
        }
        document.getElementsByClassName("key").disabled=true;
    }

    checkForWin(){
        return document.getElementsByClassName("hide").length == 0;
    }

    removeLife(){
    let hearts=document.getElementsByClassName("tries");
    for(let i=0; i<hearts.length; i+=1){
        if(this.missed>0){
           hearts[0].scr="images/lostHeart.png";
        }else if(this.missed===5){
            this.gameOver();
            }
        }
    }
    gameOver(){
        let h1= document.getElementById("game-over-message");
        const overlay=document.getElementById("overlay");  
        if(this.checkForWin()===true){
            overlay.style.display='show';
            overlay.style.backgroundColor='#CE2A6F ';
            h1.textContent="You win";
        }else{
            overlay.style.backgroundColor='#2ACEBD';
            h1.textContent="Game Over";
        }
    }
}