import './css/style.css';
import { createMarcup } from './createMarckup.js';
import { fetchApi } from './fetchApi.js';
const qwe = document.querySelector('.qwe');

// function getLocation() {
//   // var geolocation = navigator.geolocation;
//   navigator.geolocation.getCurrentPosition(showLocation);
// }

function showLocation(position) {
  lat = Math.floor(position.coords.latitude * 100) / 100;
  lon = Math.floor(position.coords.longitude * 100) / 100;

  fetchApi(lat, lon).then(resp => (qwe.innerHTML = createMarcup(resp)));
}
getLocation();
