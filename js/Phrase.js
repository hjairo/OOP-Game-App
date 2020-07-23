
 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase.toLowerCase()
 	}

 	// Display phrase on game board
	addPhraseToDisplay() {
		const displayPhrase = document.querySelector('#phrase ul')
		const letters = this.phrase.split('')
		letters.forEach(letter => {
			const placeHolder = document.createElement('li')
			if (letter === ' ') {
				placeHolder.className = 'space'
				placeHolder.textContent = ' '
			} else {
				placeHolder.className = `hide letter ${letter}`
				placeHolder.textContent = letter
			}
			displayPhrase.appendChild(placeHolder)
		})
	}

	// Checks if passed letter is in phrase @param (string) letter - Letter to check
	checkLetter(input) {
		return this.phrase.includes(input)
	}

	// Displays passed letter on screen after a match is found @param (string) letter - Letter to display
	showMatchedLetter(input) {
		const matchedLetter = document.querySelectorAll('#phrase ul li')
		matchedLetter.forEach(letter => {
	      if (letter.textContent === input) {
	        letter.className = `show letter ${input}`
	      }
	    })
	}
 }