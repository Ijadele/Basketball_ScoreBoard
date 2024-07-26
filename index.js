// Score variables
let homeScore = 0;
let guestScore = 0;
let homeFouls = 0;
let guestFouls = 0;

// Function to update the score
function addPoints(team, points) {
    if (team === "home") {
        homeScore += points;
        document.querySelector('#homers').textContent = homeScore;
    } else if (team === "guest") {
        guestScore += points;
        document.querySelector("#guest").textContent = guestScore;
    }
    updateWinningTeam(); // Update winning team visual cue
}

// Function to reset the score
function resetScore(team) {
    if (team === "home") {
        homeScore = 0;
        document.querySelector('#homers').textContent = homeScore;
    } else if (team === "guest") {
        guestScore = 0;
        document.querySelector("#guest").textContent = guestScore;
    }
    updateWinningTeam(); // Update winning team visual cue
}

// Function to add a foul
function addFoul(team) {
    if (team === "home") {
        homeFouls += 1;
        document.getElementById('homeFouls').textContent = homeFouls;
    } else if (team === "guest") {
        guestFouls += 1;
        document.getElementById('guestFouls').textContent = guestFouls;
    }
}

// Function to reset fouls
function resetFouls(team) {
    if (team === "home") {
        homeFouls = 0;
        document.getElementById('homeFouls').textContent = homeFouls;
    } else if (team === "guest") {
        guestFouls = 0;
        document.getElementById('guestFouls').textContent = guestFouls;
    }
}

// Function to update the winning team's visual cue
function updateWinningTeam() {
    const homeScoreElement = document.querySelector('#homers');
    const guestScoreElement = document.querySelector('#guest');

    // Remove winning class from both teams
    homeScoreElement.classList.remove('winning');
    guestScoreElement.classList.remove('winning');

    // Add winning class to the leading team
    if (homeScore > guestScore) {
        homeScoreElement.classList.add('winning');
    } else if (guestScore > homeScore) {
        guestScoreElement.classList.add('winning');
    }
}

// Timer and Quarter functions
let timerInterval;
let timerSeconds = 900; // 15 minutes in seconds
let currentQuarter = 1;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                pauseTimer();
                alert("Quarter Ended!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 900; // Reset to 15 minutes
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function nextQuarter() {
    if (currentQuarter < 4) {
        currentQuarter++;
        resetTimer();
        updateQuarterDisplay();
    } else {
        alert("Game Over!");
    }
}

function updateQuarterDisplay() {
    document.getElementById('quarter').textContent = currentQuarter;
}
