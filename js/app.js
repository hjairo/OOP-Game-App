
// Starts game when 'Start Game' button is clicked
const game = new Game()
document.querySelector('#btn__reset').addEventListener('click', () => game.startGame())


// Adds an eventlistener to any input given on the provided keyboard
document.querySelector('#qwerty').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target)
    }
})

// Adds an eventlistener to any input given by pressing a physical keyboard
document.addEventListener('keydown', e => {
    const keys = document.querySelectorAll('.key')
    if (document.getElementById('overlay').style.display === 'none') {
	    keys.forEach(input => {
			if (e.key === input.textContent && input.disabled != true) {
				game.handleInteraction(input)
			}
		})
    }
})
