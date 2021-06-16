import { data } from "browserslist";
import L from "leaflet";
import HeatmapLayer from "leaflet-heatmap";
import "leaflet/dist/leaflet.css";
import satData from "./data/ret100.json";

function initApp() {
  // configure base tile layer
  let baseLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png", {
    attribution: `attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>`,
    detectRetina: true,
  });

  let heatmap = new HeatmapLayer({
    maxOpacity: 0.8,
    radius: 2,
    scaleRadius: true,
    useLocalExtrema: true,
    latField: "lat",
    lngField: "lon",
    valueField: "ret100",
  });

  var map = new L.Map("map", {
    center: new L.LatLng(-49.975, -74.825),
    zoom: 6,
    layers: [baseLayer, heatmap],
  });

  heatmap.setData(satData);

  // register events
  map.addEventListener("click", handleMapClick);
}

// click event
function handleMapClick(event) {
  alert(`COORDINATES: ${event.latlng}`);
  // send, calculate and fetch data about floods here
}

initApp();
