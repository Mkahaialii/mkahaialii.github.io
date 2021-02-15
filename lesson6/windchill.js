function doInputOutput() {
				
    let tempF = parseFloat(document.getElementById('temperature').value);
    let speed = parseFloat(document.getElementById('windSpeed').value);

    let wc = windChill(tempF,speed);

    document.getElementById('displayWindChill').innerHTML = wc.toFixed(0) + "℉.";
        
    }


function windChill (tempF,speed) {

    
    let windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed ** 0.16;

    return Math.round(windChillFactor);		

}