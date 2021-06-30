import L from 'leaflet';
import Draw from 'leaflet-draw';
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css"

function initApp() {
  // configure tile layer
  let baseLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png", {
    attribution: `attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>`,
    detectRetina: true,
  });

  // create map
  let map = new L.Map("map", {
    center: new L.LatLng(0, 0),
    zoom: 3,
    drawControl: true,
    layers: [baseLayer],
  });

  // FeatureGroup is to store editable layers
  let drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);
  let drawControl = new L.Control.Draw({
    edit: {
      featureGroup: drawnItems,
    },
  });
  map.addControl(drawControl);

  // register events
  // map.addEventListener("click", handleMapClick);
}

// click event
function handleMapClick(event) {
  alert(`COORDINATES: ${event.latlng}`);
  // send, calculate and fetch data about floods here
}

initApp();
