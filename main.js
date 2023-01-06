
let mineAmount = 10
let minesLocation = [] 
let gameOver = false

// logic for mine placement
let initializeMines = (mineAmount) => {
  for (i = 0; i < mineAmount; i++) {
    let mineNumbers = Math.floor(Math.random() * 100) +1;
    minesLocation.push(mineNumbers)
    }
}

initializeMines(mineAmount)

console.log(minesLocation)

//game function
function startGame() {
   


}
// get start button to function
let startButton = document.getElementById("play")
startButton.addEventListener("click", startGame)




let checkSquare = (square) => {
// if mine location is equal to a numnber in mineLocations, show the mine in the game
clickedSquare = parseInt(square.target.classList[1]) 
// target the style
squareMorph = square.target.style
// boolean too check for mines 

if (minesLocation.includes(clickedSquare)) {
    square.target.classList.add("hidden-image")
   revealMines()
   
} else {
    console.log(squareMorph)
    console.log(clickedSquare)

    squareMorph.backgroundColor = "rgb(83, 177, 114)"
}
    
    
}


// make grid and make it so it is clickable

let boardArea = document.getElementsByClassName("box")
// boardArea[i].addEventListener("click", checkSquare)

for (let i = 0; i < boardArea.length; i++) {
    boardArea[i].addEventListener("click", checkSquare)
    
}


let revealMines = () => {
    console.log(minesLocation)


    for (let i = 0; i < boardArea.length; i++) {
       console.log(boardArea[i].classList[1])

        if (minesLocation.includes(parseInt(boardArea[i].classList[1]))) {
            console.log('text')

            boardArea[i].classList.add("hidden-image")
           
        }
    }
}

