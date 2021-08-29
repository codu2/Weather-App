const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.container');
const cardInfo = document.querySelector('.back-card');

const spitOutCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
}

const isDayTime = (icon) => {
    if (icon.includes('d')) {
        return true;
    } else {
        return false;
    }
}

updateWeatherApp = (city) => {
    console.log(city);
    const imageName = city.weather[0].icon;
    const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent = city.name;
    cardBody.innerHTML = `
    <div class="card-mid">
                    <div class="temp">
                        <span>${spitOutCelcius(city.main.temp)}&deg;C</span>
                    </div>
                    <div class="condition-temp">
                        <p class="condition">${city.weather[0].description}</p>
                        <p class="high">${spitOutCelcius(city.main.temp_max)}&deg;C</p>
                        <p class="low">${spitOutCelcius(city.main.temp_min)}&deg;C</p>
                    </div>
                </div>

                <div class="icon-container">
                    <img src="${iconSrc}" alt="" />
                </div>
                <div class="card-bottom">
                    <div class="desc">
                        <p>${spitOutCelcius(city.main.feels_like)}&deg;C</p>
                        <span>Feels Like</span>
                    </div>
                    <div class="desc">
                        <p>${city.main.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
    `;
    if (isDayTime(imageName)) {
        timeImage.style.backgroundImage = "url('/day.jpeg')";
    } else {
        timeImage.style.backgroundImage = "url('/night.jpeg')";
    }
}


searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
    searchForm.reset();

    requestcity(citySearched)
        .then((data) => {
            updateWeatherApp(data);
        })
        .catch((error) => { console.log(error) });
})

const today = document.querySelector('.today');
const date = document.querySelector('.date');

const now = new Date();

date.innerHTML = now.toUTCString();

/*
function getNow() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    date.innerHTML = `<div class="date">
                    ${year} ${addZero(month)} ${addZero(date)} ${days[day]}
                    ${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)}
                    </div>`;
}

function addZero(num) {
    num < 10 ? `0` + num : num;
}

function init() {
    getNow();
    setInterval(getNow(), 1000);
}

init();
*/
