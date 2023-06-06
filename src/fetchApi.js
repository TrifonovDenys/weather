export function fetchApi(lat, lon) {
  const API_KEY = '6ab0a63669524fad9e974311230606';
  const www = 'https://api.weatherapi.com/v1/current.json';
  const options = new URLSearchParams({
    key: API_KEY,
    q: `${lat},${lon}`,
    aqi: 'no',
  });
  return fetch(`${www}?${options}`).then(resp => resp.json());
}
