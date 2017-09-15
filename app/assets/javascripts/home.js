function initMap() {
  var locations = [
    ['Ceremony: Peristyle, 42 Dreyfous Dr, New Orleans, LA 70124', 29.9851959, -90.0995926, 1],
    ['Reception: Cabildo, 701 Chartres St, New Orleans, LA 70130', 29.9577125,-90.0660735, 2]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(29.9577125,-90.0660735),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}
