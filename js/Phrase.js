/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Create the Phrase class that receives a phrase parameter and 
// initializes the actual phrase and the methods.

let div =document.getElementById('phrase');
let ul = div.getElementsByTagName("ul")[0];

class Phrase {
    constructor(phrase){
        this.phrase=phrase.toLowerCase();
        this.phraseLetters=this.phrase.split('');
    }
    
// This method adds letter placeholders to the display when the game starts.
    addPhraseToDisplay(){
        for (let i=0; i<this.phraseLetters.length; i++){
            if (this.phraseLetters[i] === ' '){
                let phraseSpace = document.createElement('li');
                phraseSpace.setAttribute('class','space');
                ul.appendChild(phraseSpace);
            } else {
                let phraseLetter = document.createElement('li','placeholder');   
                ul.appendChild(phraseLetter);
                phraseLetter.setAttribute('class', 'hide letter ' + this.phraseLetters[i]);
            } 
        }
    }

// checks to see if passed letter is in phrase.
    checkLetter(letter){
        return this.phrase.includes(letter);
    }

// Show the letter(s) on the board that matches the player's selection.
    showMatchedLetter(letter){
        let matchingLetters = document.getElementsByClassName('letter ' + letter); 
        for (let i=0; i< matchingLetters.length; i+=1){
            matchingLetters[i].textContent=letter;
            matchingLetters[i].classList.add("show");
            matchingLetters[i].classList.remove("hide");
        }
    }
}
