
let mineAmount = 10
let minesLocation = [] 


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



