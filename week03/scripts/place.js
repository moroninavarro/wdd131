document.getElementById("CurrentYear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = document.lastModified;


function calculateWindChill (temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

}


document.addEventListener("DOMContentLoaded" , function(){
    const temperature = 10;
    const windSpeed= 5;
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChillValue").innerHTML = windChill.toFixed(2) + " °F";
    });