let txt = document.getElementById("txt");

let imges = document.getElementById("imges");

let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let txt3 = document.getElementById("txt3");
let txt4 = document.getElementById("txt4");
let txt5 = document.getElementById("txt5");
let lasttxt1 = document.getElementById("lasttxt1");
let lasttxt2 = document.getElementById("lasttxt2");
let lasttxt3 = document.getElementById("lasttxt3");

let not = document.querySelector(".not");
let boxxx = document.querySelector(".boxxx");
let boox = document.querySelector(".boox");


function sample() {
    let countryName = txt.value;
    let api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=0e8ab3d54d0dd3aac0b8639b40d4c8b2`);
    let apidata = api.then((response) => response.json());
    apidata.then((data) => {

        if (data.cod === "404") {
            not.style.display = "flex";
            boxxx.style.display = "none";
            boox.style.height = "300px";
            console.log("error")
            return;
        }

        not.style.display = "none";
        boxxx.style.display = "block";
        boox.style.height = "550px";

        txt1.innerText = `${data.name}`
        txt2.innerText = `${Math.round(data.main.temp - 273.15)}°C`
        txt3.innerText = `${data.wind.speed}Km`
        txt4.innerText = `${data.main.humidity}%`
        lasttxt1.innerText = `${data.main.pressure}hPa`
        lasttxt2.innerText = `${data.clouds.all}%`
        lasttxt3.innerText = `${data.main.sea_level}M`
        txt5.innerText = `${data.weather[0].description}`

        switch (data.weather[0].main) {
            case "Clouds":
                imges.src = "./image/cloud.png";
                break;
            case "Clear":
                imges.src = "./image/clear.png";
                break;
            case "Rain":
                imges.src = "./image/rain.png";
                break;
            case "Mist":
                imges.src = "./image/mist.png";
                break;
            case "Snow":
                imges.src = "./image/snow.png";
                break;
        };

    })
};