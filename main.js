


let mineAmount = 15
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
     minesLocation = []

}
// get start button to function
// let startButton = document.getElementById("play")
// startButton.addEventListener("click", startGame)




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

// checking for 

// make grid and make it so it is clickable

let boardArea = document.getElementsByClassName("box")
// boardArea[i].addEventListener("click", checkSquare)

for (let i = 0; i < boardArea.length; i++) {
    boardArea[i].addEventListener("click", checkSquare)
    
}

//.     RECURSION // IN PROGRESS // (SOURCED)

//     //add numbers
//     for (let i = 0; i < squares.lenght; i++) {
//         let total = 0
//         const isLeftEdge = (i % width === 0)
//         const isRightEdge = (i % width === width -1)

//         if (square[i].classList.contains('box')) {
//             if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('mines')) total ++
//             if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('mines')) total ++
//             if (i > 10 && squares[i -width].classList.contains('mines')) total ++
//             if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('mines')) total ++
//             if (i < 98 && !isRightEdge && squares[i +1].classList.contains('mines')) total ++
//             if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('mines')) total ++
//             if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('mines')) total ++
//             if (i < 89 && squares[i +width].classList.contains('mines')) total ++
            
           

//             squares[1].setAttribute('text', total)
            
//         }

//     }
// }
// initializeMines();

    //////.           MORE RECURSION IN PROGRESS  //// (SOURCED)



// check neighboring squares
// function checksquares(square, currentId) {
//     const isLeftEdge = (currentId % width === 0)
//     const isRightEdge = (currentId % width === width -1)

//     setTimeout(() => {
//         if (currentId > 0 && !isLeftEdge) {
//             const newId = cells[parseInt(currentId)-1].id
//             const newSquare = getElementById(newId)
//             click(newCell)

//         }
//         if (currentId > 9 && !isRightEdge) {
//             const newId = cells[parseInt(currentId) +1 -width].id
//             const newSquare = getElementById(newId)
//             click(newSquare)
//         }
//         if (currentId > 10) {
//             const newId = squares[parseInt(currentId -width)].id
//             const newSquare = getElementById(newId)
//             click(newsquare)
//         }
//         if (currentId > 11 && !isLeftEdge) {
//             const newId = squares[parseInt(currentId) -1 -width].id
//             const newSquare = getElementById(newId)
//             click(newsquare)
//         }
//         if (currentId < 98 && !isRightEdge) {
//             const newId= squares[parseInt(currentId) +1 ].id
//             const newSquare = getElementById(newId)
//             click(newsquare)
//         }
//         if (currentId < 90 && !isRightEdge) {
//             const NewId = squares[parseInt(currentId) -1 +width].id
//             const newSquare = getElementById(newId)
//             click(newsquare)
//         }
//         if (currentId < 88 && !isRightEdge) {
//             const newId = squares[parseInt(currentId) +1 +width].id
//             const newSquare = getElementById(newId)
//             click(newsquare)
//         }
//         if (currentId < 89) {
//             const newId = squares[parseInt(currentId) +width].id
//             const newSquare = getElementById(newId)
//             click(newsquare)
//         }




//     }, 10)
// }



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

let startButton = document.getElementsByClassName("play")

startButton.addEventListener("click", function(){
    board = initializeMines(boardArea)

})

 
