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

updateWeatherApp = (city) => {
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
                    <i class="ri-cloud-line"></i>
                </div>
                <div class="card-bottom">
                    <div class="desc">
                        <p>${spitOutCelcius(city.main.feels_like)}&deg;C</p>
                        <span>Feels Like</span>
                    </div>
                    <div class="desc">
                        <p>${spitOutCelcius(city.main.humidity)}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
    `
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
