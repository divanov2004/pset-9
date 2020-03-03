///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  // horizontals
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [11, 12, 13, 14],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  // verticals
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  //diagonals row 1
  [0, 8, 16, 24],
  [1, 9, 17, 25],
  [2, 10, 18, 26],
  [3, 11, 19, 27],
  [6, 12, 18, 24],
  [5, 11, 17, 23],
  [4, 10, 16, 22],
  [3, 9, 15, 21],
  //diagonals row 2
  [7, 15, 23, 31],
  [8, 16, 24, 32],
  [9, 17, 25, 33],
  [10, 18, 26, 34],
  [13, 19, 25, 31],
  [12, 18, 24, 30],
  [11, 17, 23, 29],
  [10, 16, 22, 28],
  //diagonals row 3
  [14, 22, 30, 38],
  [15, 23, 31, 39],
  [16, 24, 32, 40],
  [17, 25, 33, 41],
  [20, 26, 32, 38],
  [19, 25, 31, 37],
  [18, 24, 30, 36],
  [17, 23, 29, 35],
  //diagonals row 4
  [21, 15, 9, 3],
  [22, 16, 10, 4],
  [23, 17, 11, 5],
  [24, 18, 12, 6],
  [27, 19, 11, 3],
  [26, 18, 10, 2],
  [25, 17, 9, 1],
  [24, 16, 8, 0],
  //diagonals row 5
  [28, 22, 16, 10],
  [29, 23, 17, 11],
  [30, 24, 18, 12],
  [31, 25, 19, 13],
  [34, 26, 18, 10],
  [33, 25, 17, 9],
  [32, 24, 16, 8],
  [31, 23, 15, 7],
  //diagonals row 6
  [35, 29, 23, 17],
  [36, 30, 24, 18],
  [37, 31, 25, 19],
  [38, 32, 26, 20],
  [41, 33, 25, 17],
  [40, 32, 24, 16],
  [39, 31, 23, 15],
  [38, 30, 22, 14],
];


const column1 = [
  0, 7, 14, 21, 28, 35
];

const column2 = [
  1, 8, 15, 22, 29, 36
];

const column3 = [
  2, 9, 16, 23, 30, 37
]

const column4 = [
  3, 10, 17, 24, 31, 38
]

const column5 = [
  4, 11, 18, 25, 32, 39
]

const column6 = [
  5, 12, 19, 26, 33, 40
]

const column7 = [
  6, 13, 20, 27, 34, 41
]

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let score;
let turn;
let win;
let x_wins = 0;
let o_wins = 0;
let ties= 0
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");

///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("reset-scoreboard").onclick = resetScoreboard;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
  ];

  turn = whoGoesFirst();
  win = null;
  render();   // we'll write this later
}

function whoGoesFirst() {
  do {
    var a = prompt("Who goes first?")
    if (a == null) {
      break;
    }

    a = String(a)

    if (a != "red" && a != "Red" && a != "yellow" && a != "Yellow") {
      alert("Invalid value. Please type either 'Red' or 'Yellow'.")
    }
  } while (a != "red" && a != "Red" && a != "yellow" && a != "Yellow" && a != null)

  return a
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].style.backgroundColor = mark;
  });

  if (win === "red") {
    x_wins = x_wins + 1
  }
  else if (win === "yellow") {
    o_wins = o_wins + 1
  }
  else if (win === "T") {
    ties = ties + 1
  }
  x_score.innerHTML = x_wins
  o_score.innerHTML = o_wins
  tie_score.innerHTML = ties

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;

}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (column1.includes(index)) {
      let avail = -1;
      for (const cell of column1) {
        if (board[cell] === "") {
          avail = cell;
        }
      }

      board[avail] = turn;
      turn = turn === "red" ? "yellow" : "red";
      win = getWinner();
      render();
    } else if (column2.includes(index)) {
      let avail = -1;
      for (const cell of column2) {
        if (board[cell] === "") {
          avail = cell;
        }
      }

      board[avail] = turn;
      turn = turn === "red" ? "yellow" : "red";
      win = getWinner();
      render();
    } else if (column3.includes(index)) {
      let avail = -1;
      for (const cell of column3) {
        if (board[cell] === "") {
          avail = cell;
        }
      }

      board[avail] = turn;
      turn = turn === "red" ? "yellow" : "red";
      win = getWinner();
      render();
    } else if (column4.includes(index)) {
      let avail = -1;
      for (const cell of column4) {
        if (board[cell] === "") {
          avail = cell;
        }
      }

      board[avail] = turn;
      turn = turn === "red" ? "yellow" : "red";
      win = getWinner();
      render();
    } else if (column5.includes(index)) {
      let avail = -1;
      for (const cell of column5) {
        if (board[cell] === "") {
          avail = cell;
        }
      }

      board[avail] = turn;
      turn = turn === "red" ? "yellow" : "red";
      win = getWinner();
      render();
    } else if (column6.includes(index)) {
      let avail = -1;
      for (const cell of column6) {
        if (board[cell] === "") {
          avail = cell;
        }
      }

      board[avail] = turn;
      turn = turn === "red" ? "yellow" : "red";
      win = getWinner();
      render();
    } else if (column7.includes(index)) {
      let avail = -1;
      for (const cell of column7) {
        if (board[cell] === "") {
          avail = cell;
        }
      }

      board[avail] = turn;
      turn = turn === "red" ? "yellow" : "red";
      win = getWinner();
      render();
    }
  }
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]] &&
      board[condition[2]] === board[condition[3]]
    ) {
      winner = board[condition[0]];
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
}

function resetScoreboard() {
    x_wins = 0;
    o_wins = 0;
    ties = 0;

    x_score.innerHTML = x_wins
    o_score.innerHTML = o_wins
    tie_score.innerHTML = ties
}

document.getElementById("homeButton").onclick = function () {
        location.href = "index.html";
    };
