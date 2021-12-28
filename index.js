// randon numbers beetween 1 and 6 included both
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// changing images
document.querySelector("#img1").setAttribute('src', 'images/dice' + randomNumber1 + '.png');
document.querySelector("#img2").setAttribute('src', 'images/dice' + randomNumber2 + '.png');

// changing title and showing the Winner
if(randomNumber1 > randomNumber2) {
    document.querySelector("#title").innerText = 'Player 1 Wins!!!';
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("#title").innerText = 'Player 2 Wins!!!';
}
else {
    document.querySelector("#title").innerText = 'Draw Game...';
}

