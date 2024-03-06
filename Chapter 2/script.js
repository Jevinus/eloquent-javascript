//CHAPTER 2 PROJECTS

// 1. # character loop 
function tagLoop(char) {
  for (let i = 0; i <= 7; i++){
    console.log(char += char);
  }
}

tagLoop("#"); 

// 2. fizzBuzz 
function fizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzBuzz")
    }  else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

 fizzBuzz(100); 

// 3. chessboard
function chessBoard(width, height) {
  let board = "";
  
  function chessLoop() {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if ((i + j) % 2 === 0) {
          board += "#";
        } else {
          board += " ";
        }
      }
      board += "\n";
    }
  }
  
  chessLoop();
  console.log(board);
}

chessBoard(10, 10);