let homeScore = document.getElementById("home-score") /* This line is needed only if IDs or classes contain - or _ */
let guestScore = document.getElementById("guest-score")


/* Home score below */
let homeScoreTotal = 0 /* This line is needed for the starting score */
function incrementHomeOne() {
    homeScoreTotal += 1 /* will continue counting +1 when clicked */
    homeScore.innerText = homeScoreTotal
}

function incrementHomeTwo() {
    homeScoreTotal = homeScoreTotal + 2
    homeScore.innerText = homeScoreTotal
}

function incrementHomeThree() {
    homeScoreTotal = homeScoreTotal + 3
    homeScore.innerText = homeScoreTotal
}

/* Guest score below */
let guestScoreTotal = 0 
function incrementGuestOne() {
    guestScoreTotal += 1 
    guestScore.innerText = guestScoreTotal
}

function incrementGuestTwo() {
    guestScoreTotal = guestScoreTotal + 2
    guestScore.innerText = guestScoreTotal
}

function incrementGuestThree() {
    guestScoreTotal = guestScoreTotal + 3
    guestScore.innerText = guestScoreTotal
}


/* New Game - A function to stop the game and start the count from 0 */
function newGame() {
    homeScoreTotal = 0
    guestScoreTotal = 0
    homeScore.innerText = 0
    guestScore.innerText = 0
}

/* Highlighting the leading team */


/* Fouls in total for each team */


/* Timer - resetting the timer when new game starts, pausing timer, */






