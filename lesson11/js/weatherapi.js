//Current weather data

// Web address - source for data info

const apiURL =

  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=8ce93b7732020d6cedce7033bc7f529a";

 

// Fetch to retrieve apiURL

fetch(apiURL)

  .then((response) => response.json())

  .then((jsObject) => {

    console.log(jsObject);

 

    // assign js Objects to elements by ID. Pay close attention to which data is in an array.

    document.getElementById("currentCondition").textContent = jsObject.weather[0].main;

    document.getElementById("temperature").textContent = Math.round(jsObject.main.temp);

    document.getElementById("windSpeed").textContent = Math.round(jsObject.wind.speed);

    document.getElementById("humidityLevel").textContent = jsObject.main.humidity + "%";

 

    // Use weather API data to calculate wind chill. Be sure to parseFloat to convert string data to numbers.

    let temperature = jsObject.main.temp;

    let windSpeed = jsObject.wind.speed;

 

    if (temperature <= 50 && windSpeed >= 3) {

      let windChill =

        35.74 +

        0.6215 * temperature -

        35.75 * Math.pow(windSpeed, 0.16) +

        0.4275 * temperature * Math.pow(windSpeed, 0.16);

 

      windChill = document.getElementById("windChill").innerHTML =

        Math.round(windChill) + "&deg; " + "F";

    } else {

      windChill = "Not Applicable";

 

      document.getElementById("chill").innerHTML = windChill;

    }

  });

 

 

//Forecast Data Table

// Constant Web source of data

const apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8ce93b7732020d6cedce7033bc7f529a";

 

fetch(apiforecastURL)

  .then((response) => response.json())

  .then((jsObject) => {

 

    //Constants

    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const thefive = jsObject.list.filter((element) =>

      element.dt_txt.includes("18:00:00")

      );

 

    // Use a "for" loop to loop through the data and fill the table

    let day = 0;

    let i = 0;

 

    for (i = 0; i < thefive.length; i++) {

      let d = new Date(thefive[i].dt_txt); //date object to get date

 

      // Input Days

      document.getElementById("dayofWeek" + (day + 1)).textContent =

      dayofWeek[d.getDay()];

 

      // Whole number data

      document.getElementById("forecast" + (day + 1)).textContent =

        Math.round(thefive[day].main.temp) + " °F";

 

      // Icon address

      var imagesrc =

        "https://openweathermap.org/img/w/" +

        thefive[day].weather[0].icon +

        ".png";

 

      // Populate table

      document.getElementById("imagesrc" + (day + 1)).textContent = imagesrc;

      document.getElementById("icon" + (day + 1)).setAttribute("src", imagesrc);

      document.getElementById("icon" + (day + 1)).setAttribute("alt", thefive[0].weather[0].description);

     

      day++;

    }

  });