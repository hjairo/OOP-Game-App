 
 class Game {
 	constructor() {
 		this.missed = 0
 		this.phrases = this.createPhrases()
 		this.activePhrase = null
 	}

 	// Creates phrases for use in game @return {array} An array of phrases that could be used in the game
	createPhrases() {
		const phraseSet = [
			new Phrase('I turned myself into a pickle'),
			new Phrase('Way over yander'),
			new Phrase('Valar Morghulis'),
			new Phrase('Toss a coin to your witcher'),
			new Phrase('Legalize ranch'),
			new Phrase('Got more soul than a sock with a hole')
		]
		return phraseSet
	}

	// Selects random phrase from phrases property @return {Object} Phrase object chosen to be used
	getRandomPhrase() {
		return this.phrases[Math.floor(Math.random() * this.phrases.length)]
	};

	// Begins game by selecting a random phrase and displaying it to user
	startGame() {
		document.querySelector('#overlay').style.display = 'none'
		this.activePhrase = this.getRandomPhrase()
		this.activePhrase.addPhraseToDisplay()
	};

	// Checks for winning move @return {boolean} True if game has been won, false if game wasn't won
	checkForWin() {
		return !document.getElementsByClassName('hide').length
	};

	// Increases the value of the missed property. Removes a life from the scoreboard. Checks if player has remaining lives and ends game if player is out
	removeLife() {
		if (this.missed < 4) {
			document.querySelectorAll('.tries img')[4 - this.missed].src = 'images/lostHeart.png'
			this.missed++
		} else {
			this.gameOver()
		}
	};

	// Displays game over message @param {boolean} gameWon - Whether or not the user won the game
	gameOver(gameWon) {
		const overlay = document.querySelector('#overlay')
		const gameOverMessage = document.querySelector('#game-over-message')
		overlay.style.display = ''
		if (gameWon) {
			gameOverMessage.textContent = 'Congrats, you won!'
			overlay.className = 'win'
		} else if (!gameWon) {
			gameOverMessage.textContent = 'Better luck next time'
			overlay.className = 'lose'
		}
		this.resetGame();
	};	

	// Handles onscreen keyboard button clicks @param (HTMLButtonElement) button - The clicked button element
	handleInteraction(button) {
		const currentPhrase = this.activePhrase.phrase
        const input = button.textContent
        button.disabled = true;
        if(currentPhrase.includes(input)) {
            button.className = 'chosen'
            this.activePhrase.showMatchedLetter(input)
            if (this.checkForWin()) {
                this.gameOver(true)
            }
        } else {
            button.className = 'wrong'
            this.removeLife()
        }
	};


	// function resets the game and its elements back to their initial properties when called upon
	resetGame() {
        document.querySelector('#phrase ul').innerHTML = ''
        document.querySelectorAll('.keyrow button').forEach(key => {
            key.disabled = false
            key.className =  'key'
        })
        document.querySelectorAll('li.tries img').forEach(heart => heart.setAttribute('src', "images/liveHeart.png"))
        this.missed = 0
    }
 };

