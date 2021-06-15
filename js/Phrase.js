/* 
 * Phrase.js 
 * manages individual phrases */

class Phrase {
    constructor(phrase, hint) {
        this.phrase = phrase.toLowerCase();
        this.hint = hint;
    }

    //method displays phrase 
    addPhraseToDisplay() {
        const phraseUL = document.querySelector('#phrase ul'); 
        for(const char of this.phrase) {
            const phraseLi = document.createElement('li');
            phraseUL.appendChild(phraseLi); 
            phraseLi.classList.add('hide'); 
            if(char === ' ') {
                phraseLi.classList.add('space');
            } else{
                phraseLi.classList.add('letter');
                phraseLi.classList.add(char);
                phraseLi.textContent = char;
            }
        } 
    }
  
    //checking for matching letters 
    checkLetter(letter) {
        return this.phrase.includes(letter); 
    }
    //shows matching letters 
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll('.letter');
        for(const char of letters) {
           
            if (char.innerText === letter) {
               char.classList.remove('hide');
               char.classList.add('show');
            } 
        }
        
    }
}
