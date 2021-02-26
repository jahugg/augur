import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const map = L.map('map', {
  center: [52.52, 13.4],
  zoom: 4,
});

new L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
  attribution: `attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>`,
  detectRetina: true,
}).addTo(map);

map.addEventListener('click', (e) => alert(`COORDINATES: ${e.latlng}`));
