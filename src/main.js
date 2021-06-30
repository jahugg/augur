import L from "leaflet";
import Draw from "leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import leaf from "url:./leaf-orange.png";
import leafShadow from "url:./leaf-shadow.png";

const locationMarker = L.icon({
  iconUrl: leaf,
  shadowUrl: leafShadow,

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

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
    layers: [baseLayer],
  });

  // FeatureGroup is to store editable layers
  let drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);

  let drawControl = new L.Control.Draw({
    draw: {
      marker: { icon: locationMarker },
      polyline: false,
      rectangle: false,
      circle: false,
      circlemarker: false,
    },
    edit: false,
  });
  map.addControl(drawControl);

  // event handling
  map.addEventListener("draw:created", handleNewPolygone);

  function handleNewPolygone(event) {
    let layer = event.layer;
    console.log(layer);
    map.addLayer(layer);
  }

  // register events
  // map.addEventListener("click", sendCoords);
}

// click event
function sendCoords(event) {
  alert(`COORDINATES: ${event.latlng}`);
  // send, calculate and fetch data about floods here
}

initApp();
