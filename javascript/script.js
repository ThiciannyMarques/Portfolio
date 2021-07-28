let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -1.4563073, lng: -48.5012804 },
    zoom: 8,
  });
}

export { initMap };