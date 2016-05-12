(function squareTapBot() {


    /////// Variables
    var d = document;
    d.qs = d.querySelectorAll;

    var solutionGrid = d.qs('#solutionGrid')[0],
        playGrid = d.qs('#playGrid')[0],
        timer = d.qs('#timer')[0],
        message = d.qs('#message')[0],
        startNewGame = d.qs('#startNewgame')[0].onclick = function() { window.location.reload(); },
        level = 1,
        score = d.qs('#score')[0].innerHTML,
        levelReached = d.qs('#levelreached')[0],
        solutionArr = [];


    /////// Functions
    function extractSolutionValues() {
        for (var i = 0; i < solutionGrid.children.length; i += 1) {
            solutionArr.push(parseInt(solutionGrid.children[i].attributes[2].value));
        }

        // Let's click all the right squares.
        clickSolution();
    }

    function clickSolution() {
        for (var i = 0; i < playGrid.children.length; i += 1) {
            for (var s = 0; s < solutionArr[i]; s += 1) {
                playGrid.children[i].click();
            }
            // Last square. Reset the flow & launch again.
            if (i === 8) {
                setTimeout(function () {
                    reset();
                }, 2);
            }
        }
    }

    function showEndGame() {
        message.className += "show";
        levelReached.innerHTML = "You reached level <strong>" + level + "</strong></br/> with a score of <strong>" + score + " points</strong>";
    }

    function reset() {

            solutionGrid = d.qs('#solutionGrid')[0];
            score = d.qs('#score')[0].innerHTML;
            level += 1;
            solutionArr = [];

            // Do we still have time left?
            if (parseInt(timer.innerHTML) > 0) {
                // Start all over again.
                extractSolutionValues();
            } else {
                // Ouch, that's a negative timer. Just end the game.
                timer.innerHTML = "Time's up!";
                window.clearInterval(window.time);
                showEndGame();
            }

    }


    /////// Extract the solutions & let's roll.
    extractSolutionValues();

})();