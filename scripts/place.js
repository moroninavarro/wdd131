document.getElementById("CurrentYear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = document.lastModified;



console.log

let temperature = 10;
let windSpeed = 5;

function calculateWindChill (temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

}

if (temperature <=50 && windSpeed >3) {
    let windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("value").textContent = windChill.toFixed(2) +  " °F";
}

else {
    document.getElementById("value").textContent= "N/A";

}

