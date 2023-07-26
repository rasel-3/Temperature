const API_KEY = '138ba91226c444e03f382ec54b66fa68';

const loadTemperatureCity = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
}
const displayTemperature = (data) => {
    setInputItem('temperature', data.main.temp);
    setInputItem('condition',  data.weather[0].main );
    // const temperature = document.getElementById('temperature')
    // temperature.innerText = data.main.temp;
    // document.getElementById('condition').innerText = data.weather[0].main;
}
const setInputItem = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field')
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperatureCity(city);
})


