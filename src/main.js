import { data } from "browserslist";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import satData from './data/satiliteData.json';

function initApp() {
  console.log(satData);

  // init map
  const map = L.map("map", {
    center: [52.52, 13.4],
    zoom: 4,
  });

  // configure tile layer
  new L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png", {
    attribution: `attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>`,
    detectRetina: true,
  }).addTo(map);

  // register events
  map.addEventListener("click", handleMapClick);
}

// click event
function handleMapClick(event) {
  alert(`COORDINATES: ${event.latlng}`);
  // send, calculate and fetch data about floods here
}

initApp();
