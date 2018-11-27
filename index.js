function initMap() {
    let houseRoots = { lat: 34.272734, lng: -118.486 };
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            center: houseRoots,
        }
    );

    let marker = new google.maps.Marker({ position: { lat: 34.272117, lng: -118.484339 }, map: map });
}