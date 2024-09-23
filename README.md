# Simon Game Application

This is a simple web application that implements the classic Simon game. The game displays a sequence of colored buttons and requires the player to repeat the sequence. The game gets progressively harder as the sequence length increases.

## Getting Started

### Prerequisites
- A modern web browser
- jQuery library (included via CDN)

### Running the Application
1. Open the `index.html` file in a web browser.
2. Press any key to start the game.
3. Repeat the sequence of colored buttons by clicking on them.
4. The game will display a new sequence and require the player to repeat it.

## Gameplay
- The game starts with a sequence length of 1 and increases by 1 each round.
- The player must repeat the sequence exactly, including the order and timing of the button presses.
- If the player makes a mistake, the game will display an error message and reset the sequence.

## Code Structure
- The game logic is implemented in the `game.js` file.
- The game uses jQuery to manipulate the DOM and handle user input.
- The game uses CSS to style the buttons and display the sequence.
