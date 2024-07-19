// Home functions
let scoreBoard = document.querySelector('#homers');
let homeScore = 0;

function add1() {
    homeScore += 1;
    scoreBoard.textContent = homeScore;
}

function add2() {
    homeScore += 2;
    scoreBoard.textContent = homeScore;
}

function add3() {
    homeScore += 3;
    scoreBoard.textContent = homeScore;
}

function reset() {
    scoreBoard.textContent = 0;
    homeScore = 0;
}

// Guest functions
let scoreBoard2 = document.querySelector("#guest");
let guestScore = 0;

function addGuest1() {
    guestScore += 1;
    scoreBoard2.textContent = guestScore;
}

function addGuest2() {
    guestScore += 2;
    scoreBoard2.textContent = guestScore;
}

function addGuest3() {
    guestScore += 3;
    scoreBoard2.textContent = guestScore;
}

function guestReset() {
    scoreBoard2.textContent = 0;
    guestScore = 0;
}

// Foul functions
let homeFouls = 0;
let guestFouls = 0;

function addHomeFoul() {
    homeFouls += 1;
    document.getElementById('homeFouls').textContent = homeFouls;
}

function resetHomeFouls() {
    homeFouls = 0;
    document.getElementById('homeFouls').textContent = homeFouls;
}

function addGuestFoul() {
    guestFouls += 1;
    document.getElementById('guestFouls').textContent = guestFouls;
}

function resetGuestFouls() {
    guestFouls = 0;
    document.getElementById('guestFouls').textContent = guestFouls;
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