# Problem Set 9

We're going to build on our Tic-Tac-Toe app from [Problem Set 8](https://github.com/ap-principles-ucvts/pset-8-skeleton). In this problem set, we'll be building out an entire suite of games. We already have Tic-Tac-Toe, and we'll be adding two more!

## Getting Started

To get started, create a [GitHub](https://github.com/) repository to store your code. When you're finished, clone my skeleton to get all of the starter code and instructions. Setup a remote to push your code to your repository instead of mine.

### Setup

1. Login to your GitHub account and create a new repository named `pset-9`.
2. In the terminal, navigate to your `APCSP` directory on the `Desktop`.

```
$ cd ~/Desktop/APCSP
```

3. Create a new folder in your `APCSP` folder called `pset-9`.

```
$ mkdir pset-9
```

4. Change into your newly created `pset-9` directory.

```
$ cd pset-9
```

5. Initialize a new Git repository in your `pset-9` folder.

```
$ git init
```

6. Add a remote connection to your GitHub repository. Replace `YOUR-USERNAME` with your actual username.

```
$ git remote add origin git@github.com:YOUR-USERNAME/pset-9.git
```

You're all set. You've got a clean working directory and you're ready to start coding.

## Requirements

Before getting into the specifics of each game, let's talk a little about what your application shoud look like as a whole. You'll need to choose three of the following five games to include in your suite (one of which you've already done).

These games are roughly ordered by difficulty, from easiest to most challenging. While it's tempting to pick the easiest, the difficulty level of your game suite is factored into the harshness with which you'll be graded. Those with more experience are expected to operate on the more challenging end of the spectrum.

* Tic-Tac-Toe
* Connect Four
* Ultimate Tic-Tac-Toe
* Brick Breaker
* Checkers

Your suite will be comprised of four pages.

* Home
* Tic-Tac-Toe
* Game of choice (1 of 2)
* Game of choice (2 of 2)

### Home

Your home page should titled `index.html`, and should present users with a listing of available games. Users should be able to navigate from the home page to a game of their choosing. The way in which you choose to structure and style your home page is entirely up to you, but there should be consistency between each of your four pages.

When I say consistency, I am specifically referring to fonts, color schemes, and layouts. If you're unsure if your design is consistent, please solicit feedback before traveling too far down a dead end.

### Tic-Tac-Toe

We've already completed Tic-Tac-Toe during the last problem set. For the sake of thoroughness, I'll include the rules and minimum requirements.

* The game is played on a 3-by-3 grid of squares.
* Players take turns marking the squares with either an X or an O.
* A player wins if he or she marks three consecutive squares: vertically, horizontally, or diagonally.
* If all nine squares are marked without either player winning, the game ends in a tie.

Remember, these are just the _minimum_ requirements. My suggestion is that you spare no expense in making this game your own. Part of the grading process will be how desirable your game is to your peers. What makes a game desirable? User interface and user experience (affectionately known in the world of software developemnt as UI and UX).

The user interface is how the application looks. This comes down to your structure and style. The user experience is more about the features your game supports, how well they are integrated, and how intuitive the game play is.

Looking for a little inspiration? Here are some cool features you might consider implementing.

* Keep score. Let players play multiple games, and keep track of their wins and losses.
* Allow players to choose who will go first. Or, alternatively, let the loser of the previous game go first (or randomize this decision if the previous game ended in a tie).
* Implement an AI so that players can play against the computer. It would be really cool if players could choose a difficulty level (i.e., easy, medium, hard, expert), and your AI would play accordingly.

### Connect Four

Connect Four is essentially Tic-Tac-Toe on a larger scale. Here are the rules and minimum requirements.

* The game is played on a 7-by-6 grid of cells.
* Players take turns placing pieces (red or yellow) on the board.
* When a player places a piece on the board, he or she does so by choosing a column. The piece is then placed in the first available cell in that column (starting from the bottom of the board).
* A player wins if he or she places four consecutive pieces: vertically, horizotnally, or diagonally.
* If the board is entirely filled without either player winning, the game ends in a tie.

Remember, these are just the _minimum_ requirements. My suggestion is that you spare no expense in making this game your own. Part of the grading process will be how desirable your game is to your peers. What makes a game desirable? User interface and user experience (affectionately known in the world of software developemnt as UI and UX).

The user interface is how the application looks. This comes down to your structure and style. The user experience is more about the features your game supports, how well they are integrated, and how intuitive the game play is.

Looking for a little inspiration? Here are some cool features you might consider implementing.

* Keep score. Let players play multiple games, and keep track of their wins and losses.
* Allow players to choose who will go first. Or, alternatively, let the loser of the previous game go first (or randomize this decision if the previous game ended in a tie).
* Implement an AI so that players can play against the computer. It would be really cool if players could choose a difficulty level (i.e., easy, medium, hard, expert), and your AI would play accordingly.
* Add some animation to your game, so that it looks like the pieces are really sliding down from the top of the board (like they would in real life!).

### Ultimate Tic-Tac-Toe

Ultimate Tic-Tac-Toe is like nine separate games of Tic-Tac-Toe. Players need to win a game of Tic-Tac-Toe just to mark one square. Here are the rules and minimum requirements.

* The game is played on a 3-by-3 grid of local boards, where each local board is further divided into its own 3-by-3 grid of squares.
* Players take turns marking the squares with either an X or an O.
* The local board on which you must play is determined by your opponent's previous move.
* If your opponent sends you to a completed local board with one or more free squares, you must play on that local board.
* If your opponent sends you to a completed local board with no free squares, you can play anywhere on the board.
* To make things a little easier for the players, you should highlight the local board in which they must play on each turn.
* As in ordinary Tic-Tac-Toe, a player wins a local board if he or she marks three consecutice squares: vertically, horizontally, or diagonally.
* A player wins the overall game if his or her local wins represent three consecutive local boards: vertically, horizontally, or diagonally.
* If all local boards have been completed without either player winning, the game ends in a tie.

Remember, these are just the _minimum_ requirements. My suggestion is that you spare no expense in making this game your own. Part of the grading process will be how desirable your game is to your peers. What makes a game desirable? User interface and user experience (affectionately known in the world of software developemnt as UI and UX).

The user interface is how the application looks. This comes down to your structure and style. The user experience is more about the features your game supports, how well they are integrated, and how intuitive the game play is.

Looking for a little inspiration? Here are some cool features you might consider implementing.

* Keep score. Let players play multiple games, and keep track of their wins and losses.
* Allow players to choose who will go first. Or, alternatively, let the loser of the previous game go first (or randomize this decision if the previous game ended in a tie).
* Implement an AI so that players can play against the computer. It would be really cool if players could choose a difficulty level (i.e., easy, medium, hard, expert), and your AI would play accordingly.

### Brick Breaker

Brick Breaker is a classic arcade-style game, where the player must use a ball and a paddle to break bricks. Here are the rules and minimum requirements.

* The game is played on an open board with a grid of bricks at the top and a paddle at the bottom.
* The ball moves continuously, bouncing off the bricks, the walls, and the paddle (and changing directions with each collision).
* If the ball collides with a brick, the brick disappears from the board.
* If the ball collides with the bottom edge (not the paddle), the game is over.
* A player can move the paddle to the left and right with either the mouse or the array keys (or both).
* A player wins by breaking all of the bricks on the board.

Remember, these are just the _minimum_ requirements. My suggestion is that you spare no expense in making this game your own. Part of the grading process will be how desirable your game is to your peers. What makes a game desirable? User interface and user experience (affectionately known in the world of software developemnt as UI and UX).

The user interface is how the application looks. This comes down to your structure and style. The user experience is more about the features your game supports, how well they are integrated, and how intuitive the game play is.

Looking for a little inspiration? Here are some cool features you might consider implementing.

* Keep score. Let players play multiple games, and keep track of their wins and losses.
* Add a difficulty level, which can manifest in several ways. Maybe the paddle is smaller when the difficulty is greater. Maybe the ball moves faster. You might also want to gradually increase the speed of the ball over time.
* Give the player a certain number of lives. The game only ends if the player runs out of lives.
* Include some power ups in random bricks. When the brick breaks, the power up falls to the bottom and the user needs to catch it with the paddle. The power up can be anything that assists the player: a larger paddle, a bigger or slower ball, or an extra life!

### Checkers

We've all played checkers at some point in our lives. If you haven't, go do that now. Here are the rules and minimum requirements.

* The game is played on an 8-by-8 grid of alternating light and dark squares.
* Each player is given 12 pieces (differentiated by color, usually light and dark).
* The pieces, regardless of color, are placed on the dark squares. This results in a starting setup where only two rows on the board are free of any pieces.
* Players take turns moving their pieces around the board, with the ultimate goal of capturing all of his or her opponent's pieces.
* Pieces can only move diagonally in one direction, and can only move one square at a time.
* If a diagonally-adjacent square is occupied by an opposing piece (and the next diagonally-adjacent square is unoccupied), a player can jump the opposing piece. This moves your piece, and removes your opponent's piece from the board.
* If, after jumping an opposing piece, another jump is immediately available, the original player can go again.
* If a piece reaches the opposite end of the board, that piece is promoted to a king. Unlike ordinary pieces, a king can move in either direction on the board (including during multiple jumps).
* A player wins if he or she captures all of his or her opponent's pieces.
* If each player has only one piece remaining on the board and 20 moves have transpired, the game ends in a stalemate.

Remember, these are just the _minimum_ requirements. My suggestion is that you spare no expense in making this game your own. Part of the grading process will be how desirable your game is to your peers. What makes a game desirable? User interface and user experience (affectionately known in the world of software developemnt as UI and UX).

The user interface is how the application looks. This comes down to your structure and style. The user experience is more about the features your game supports, how well they are integrated, and how intuitive the game play is.

Looking for a little inspiration? Here are some cool features you might consider implementing.

* Keep score. Let players play multiple games, and keep track of their wins and losses.
* Add square highlighting when selecting a piece to show players what their available moves are on each turn.
* Implement an AI so that players can play against the computer. It would be really cool if players could choose a difficulty level (i.e., easy, medium, hard, expert), and your AI would play accordingly.

## Deadline

Please read very carefully. Historically, most students lose points on problem sets for simply failing to read the instructions and requirements.

- March 1, 2020, at 11:59pm.

If you submit your problem set at midnight (i.e., March 2, 2020, at 12:00am), it is considered **late**!

### Submission Requirements

- Your code **must** compile. Code that fails to meet this minimum requirement will not be accepted.
- There must be **at least** 50 unique commits to your repository.
- Your code must meet the selected requiremens outlined in the _Requirements_ section.
- Your code must adhere to the course style guidelines.

Happy coding!
