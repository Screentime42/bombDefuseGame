//defining element ids for functions
let imageRed = document.getElementById("redwire");
let imageGreen = document.getElementById("greenwire");
let imageBlue = document.getElementById("bluewire");
let imageYellow = document.getElementById("yellowwire");

// adding event listeners for click change on wires
imageRed.addEventListener('click', function(){
    changeImageRed();
    playGame();
    guessingBomb();
    setTimeout(resetWires, 1000);
});

imageGreen.addEventListener('click', function(){
    changeImageGreen();
    playGame();
    guessingBomb();
    setTimeout(resetWires, 1000);
});

imageBlue.addEventListener('click', function(){
    changeImageBlue();
    playGame();
    guessingBomb();
    setTimeout(resetWires, 1000);
});

imageYellow.addEventListener('click', function(){
    changeImageYellow();
    playGame();
    guessingBomb();
    setTimeout(resetWires, 1000);
});

//functions to change images on click and reset others so only one image can be cut at one time
function changeImageRed(){
    if (imageRed.getAttribute("src") == "./images/redwire.png"){
        imageRed.src = "./images/redwirebr.png";
        imageGreen.src = "./images/greenwire.png";
        imageBlue.src = "./images/bluewire.png";
        imageYellow.src = "./images/yellowwire.png";
    } else {
        imageRed.src = "./images/redwire.png";
    }
    }

function changeImageGreen(){
    if (imageGreen.getAttribute("src") == "./images/greenwire.png"){
        imageGreen.src = "./images/greenwirebr.png";
        imageRed.src = "./images/redwire.png";
        imageBlue.src = "./images/bluewire.png";
        imageYellow.src = "./images/yellowwire.png";
    } else {
        imageGreen.src = "./images/greenwire.png";
    }
    }

function changeImageBlue(){
    if (imageBlue.getAttribute("src") == "./images/bluewire.png"){
        imageBlue.src = "./images/bluewirebr.png";
        imageRed.src = "./images/redwire.png";
        imageGreen.src = "./images/greenwire.png";
        imageYellow.src = "./images/yellowwire.png";
    } else {
        imageBlue.src = "./images/bluewire.png";
    }
    }

function changeImageYellow(){
    if (imageYellow.getAttribute("src") == "./images/yellowwire.png"){
        imageYellow.src = "./images/yellowwirebr.png";
        imageRed.src = "./images/redwire.png";
        imageGreen.src = "./images/greenwire.png";
        imageBlue.src = "./images/bluewire.png";
    } else {
        imageYellow.src = "./images/yellowwire.png";
    }
    }

//function to reset wires after round
function resetWires(){
    imageBlue.src = "./images/bluewire.png";
    imageRed.src = "./images/redwire.png";
    imageGreen.src = "./images/greenwire.png";
    imageYellow.src = "./images/yellowwire.png";
}

//function to call to remove the red or green lights that appear on successful/unsuccessful cut
function removeLight(){
    document.getElementById("wires").classList.remove("redlight");
    document.getElementById("wires").classList.remove("greenlight");
}

//lets the bomb guess between 1 and 3 wires to be danger wires
let bombGuess = [];
function guessingBomb(){
    let min = 1;
    let max = 4;
    let count = Math.floor(Math.random() * (3 - 1 + 1)) + min;

    for (let i = 0; i < count; i++) {
        let n = Math.floor(Math.random() * (max - min + 1)) + min;
        bombGuess.push(n);
        }
    //informs player of how many danger wires are present currently
    document.getElementById("danger").innerHTML = bombGuess.length;
    };
guessingBomb()

//sets starting scores
let score = 0;
let highscore = document.getElementById("highscore").innerHTML;

//play game
function playGame(){
    let playerGuess = 0;
 
    //declaring player guess via cut wire
    if (imageRed.getAttribute("src") == "./images/redwirebr.png"){
        playerGuess = 1;
    } else if (imageGreen.getAttribute("src") == "./images/greenwirebr.png") {
        playerGuess = 2;
    } else if (imageBlue.getAttribute("src") == "./images/bluewirebr.png") {
        playerGuess = 3;
    } else if (imageYellow.getAttribute("src") == "./images/yellowwirebr.png") {
        playerGuess = 4;
    };

    //if player is successful add point to score
    if (!bombGuess.includes(playerGuess)) {
        score++;
        document.getElementById("score").innerHTML = score;
        //updates highscore counter to match highest value
        if (document.getElementById("score").innerHTML >= document.getElementById("highscore").innerHTML) {
            document.getElementById("highscore").innerHTML = document.getElementById("score").innerHTML;
        }
        //adds green light to let player know they have cut the correct wire
        document.getElementById("wires").classList.add("greenlight");
        //removes light after 1 seconds
        setTimeout(removeLight, 1000);

    };

    //checks to see if player guess is in the array of bomb guesses and adds red light and resets the counter if it is present
    if (bombGuess.includes(playerGuess)) {
        score = 0;
        document.getElementById("score").innerHTML = score;
        document.getElementById("wires").classList.add("redlight");
        setTimeout(removeLight, 1000);
    };

    //resets the bomb array at the end of the round
    bombGuess = [];
    };
 