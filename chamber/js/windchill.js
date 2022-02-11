let temp = document.getElementById("temperature");
let numberTemp = 32
temp.innerHTML = numberTemp
let speed = document.getElementById("wind-speed");
let numberSpeed = 5
speed.innerHTML = numberSpeed
let feelTemp = document.getElementById('feelTemp');
if (meetsRequirements(numberSpeed, numberTemp)) {
    feelTemp.innerHTML = buildWC(numberSpeed, numberTemp);
    
}
else {
    feelTemp.innerHTML= "N/A"
}




function buildWC(speed, temp) {
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed,0.16);
    wc = wc.toFixed(1);
    return wc;
}

function meetsRequirements(speed, temp) {

    if (temp <=50 && speed >3) return true
    else return false
}