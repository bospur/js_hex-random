'use strict'
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
let hexStr = '';
function getRandomHexColor() {
    hexStr = '#';
    for(let i=0; i<6; i++) {
        hexStr += arr[getRandomNumber(0, arr.length - 1).toFixed()];
    }
    return hexStr;
}
function getRandomGradientBackground() {
    return `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
}
let button = document.querySelector('.button');
let textInfo = document.querySelector('.info');
let container = document.querySelector('.container');

 button.onclick = function () {
    document.body.style.background = getRandomGradientBackground();
    textInfo.textContent = `backround:${getRandomGradientBackground()}`;
 }
