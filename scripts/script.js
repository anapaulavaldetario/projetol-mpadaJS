const img = document.getElementById (`img`);
const buttons = document.getElementById (`buttons`);
const lamp = document.getElementById (`lamp`);

function lampOn () {
    lamp.src = `./image/ligada.jpg`;
}

function lampOff () {
    lamp.src = `./image/desligada.jpg`;
}

function lampBroken () {
    lamp.src = `./image/quebrada.jpg`;
}

turnOn.addEventListener ( `click`, lampOn);
turnOff.addEventListener (`click`, lampOff);
lamp.addEventListener (`mouseover`, lampOn);
lamp.addEventListener (`mouseleave`, lampOff);


lamp.addEventListener (`dblclick`, lampBroken);





