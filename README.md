# Minesweeper-

App’s Function-
-AAU: I want to start the game by choosing any tile(square) on the board at random. 
-AAU: I want to clear as many tiles(squares) as possible after I randomly choose a tile(square).
-AAU: I want to choose my next move depending on what the board displays. 
-AAU: I want to see a display if I have won or lost the game.
-AAU: I want to see some kind of option that asks me if I want to play again.
-AAU-:I want to be able to see my score.

–MVP–
-AAU:  I want to click a tile and clear as much of the board as possible without clicking on a      bomb.
-AAU: I want to see numbers displaying the probability of clicking on a bomb nearby.
-AAU: I want to see some kind of message when I win, lose or tie.
-AAU: I want to see some kind of option that asks me if I want to play again.


![Screen Shot 2023-01-06 at 10 32 31 AM](https://user-images.githubusercontent.com/119142370/211076497-0044e934-ae5d-4a48-8531-62eb77454ca5.png)

Loss
![Screen Shot 2023-01-06 at 10 52 14 AM](https://user-images.githubusercontent.com/119142370/211079414-80b84a9e-b15b-487d-ab29-a3622180fae4.png)



–ICEBOX features–
-AAU: I want to be able to choose game difficulty. This usually comes in three different board sizes.
-AAU: I want to be able to choose different board colors.
-AAU: Work with Class to store most of the functions.

Pseudocode:

-AAU: Make a board, rectangular or square in shape.
-AAU; I want that board to to have a header that has a button for game play and a counter that keeps score
-AAU: I want that board to be in the style of a grid with clickable tiles.
-AAU: I want these tiles to be clickable
-AAU: I want those clickable tiles to expose what's underneath when clicked.
-AAU: I want to create a board that randomly generates numbers(1-4) and bombs randomly scattered on a board underneath clickable tiles.
-AAU: Will need to create a random number generator (Math.random?) for the tiles that are      clicked on.
  -Some of the randomly generated tiles need to null and some bombs
  - Will need add eventListeners attached to board element.
  - Will need create a random event where the board clears a random number of tiles except for   
    the bombs hidden underneath the unclicked tiles.
  -Need to create an event listener for when player clicks on bomb exposing the rest of the       
    bombs therefore ending the game.
-AAU: Create an event after a loss or win stating one or the other.
-AAU: Create a button to reset the game after a loss or whenever you want to reset the board to               
    a new game. 
-AAU: create a way to keep and display your score.
-AAU: Call the render method to update the DOM to reflect the new state

Application’s State
Turn: Click anywhere on board to start. Keep selecting tiles until you hit a bomb. 
Board: Tiled grid.
Winner: Clear board.

Mindsweeper:
The board
New Game
