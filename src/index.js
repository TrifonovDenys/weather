import './css/style.css';
const API_KEY = '954f5a062d83196561f460329e10940e';
const www = 'https://api.openweathermap.org/data/3.0/onecall';
const options = new URLSearchParams({
  lat: 1,
  lon: 1,
  exclude: 'curent',
  units: 'metric',
  appid: API_KEY,
});

fetch(`${www}?${options}`)
  .then(resp => resp.json())
  .then(resp => console.log(resp));

const qwe = document.querySelector('.qwe');

function getLocation() {
  var geolocation = navigator.geolocation;
  geolocation.getCurrentPosition(showLocation);
}

function showLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
  return { latitude, longitude };
}
getLocation();
