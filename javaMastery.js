

function toggleDot() { // the dot fucntion to be able to click it
    document.getElementById("victory").style.visibility = "visible";
    var dot = document.getElementById("dot");
    dot.style.backgroundColor = "red";
    document.getElementById("vicAdudio").play();
}

function getRandomNumber(min, max) {
    // Generates a random number between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max - min) + min);
}

function FindDot()
{   // the start of the game, hides everything and moves the dot
    document.getElementById("victory").style.visibility = "hidden";
    const dot = document.getElementById("dot");
    dot.style.backgroundColor = "black";// to reset
    dot.style.left = getRandomNumber(0, window.innerWidth - 50) + 'px'; // Adjust 50 to the width of your element
    dot.style.top = getRandomNumber(0, window.innerHeight - 50) + 'px'; // Adjust 50 to the height of your element
    console.log(dot.style.left + "   " + dot.style.top);
}