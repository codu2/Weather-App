const key = '3e05bc847c1d4958c302ad79ba2b5c3e';

/*
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=3e05bc847c1d4958c302ad79ba2b5c3e';

fetch(baseURL)
    .then((data) => { console.log('response', data.json()) })
    .catch((error) => console.log(error));
*/

const requestcity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;
}