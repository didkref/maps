
mapboxgl.accessToken = 'pk.eyJ1IjoiZGlkcmlrIiwiYSI6ImNrNTZnNzFkczEyZjgzZmw4MHh2azh2YWIifQ.o-9doptous8eeBlzw_Jrpg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

let marker;

const followMe = (pos) => {
    const lng = pos.coords.longitude;
    const lat = pos.coords.latitude;

    map.flyTo({
        center: [lng, lat],
        zoom: 18
    });

    marker = new mapboxgl.Marker();
    marker.setLngLat([lng, lat]);
    marker.addTo(map);

}


navigator.geolocation.watchPosition(followMe);