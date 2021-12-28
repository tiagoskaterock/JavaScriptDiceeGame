// randon numbers beetween 1 and 6 included both
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// changing images
document.querySelector("#img1").setAttribute('src', 'images/dice' + randomNumber1 + '.png');;
document.querySelector("#img2").setAttribute('src', 'images/dice' + randomNumber2 + '.png');;