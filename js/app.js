/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
game.createPhrases();

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// }
// logPhrase(game.getRandomPhrase());

document.getElementById("btn__reset").addEventListener('click',(e)=>{
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click',(e)=>{
    if (e.target.tagName==='BUTTON'){
        game.handleInteraction(e.target.innerText);
    }
});