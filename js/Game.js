/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * manages the function of the game includes methods for:
 * starting/ending game 
 * handling interactions 
 * getting random phrases 
 * checking for a win 
 * and removing life counter*/
     class Game {
          constructor () {
               this.missed = 0;
               this.phrase = this.createPhrases();
               this.activePhrase = null;
          }
          createPhrases() {
               const phrase = [new Phrase('Another one bites the dust'),
                              new Phrase('Skeletons in the closet'),
                              new Phrase('Bury your head in the sand'),
                              new Phrase('Keep your friends close but your enemies closer'),
                              new Phrase('Show me the money')];
               return phrase;
          }
          //makes the above createdPhrases populate randomly.
          getRandomPhrase() {
               const phraseIndex = Math.floor(Math.random() * this.phrase.length);
               const randomPhrase = this.phrase[phraseIndex];
               return randomPhrase;
               console.log(randomPhrase)
          }
          startGame() {
               document.getElementById('overlay').style.display = 'none';
               this.activePhrase = this.getRandomPhrase();
               this.activePhrase.addPhraseToDisplay();
          }
          handleInteractions() {
               //clicked/chosen letter is captured
               /*check for letter matches phrase.char if match {
                    display letter instead of placeholder
               }  else {
                    game must remove a life 
               } check if all letters in phrase are revealed {
                    player wins 
                    display winning message
               } else if (player live === 0 ) {
                    player lost
                    display losing message
               }
              */ 

          }
     }

