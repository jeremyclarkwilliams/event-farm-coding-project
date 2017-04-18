export function getLocation() {
  if (!navigator.geolocation) {
    return false;
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat  = position.coords.latitude;
    var lon = position.coords.longitude;
    var query = 'lat=';
        query += lat;
        query += '&lon=';
        query += lon;
    return query;
  }, function() {
    return false;
  });
}
