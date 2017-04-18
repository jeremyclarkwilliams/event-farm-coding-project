export var TESTDATA = {"city":{"id":5368361,"name":"Los Angeles","coord":{"lon":-118.2437,"lat":34.0522},"country":"US","population":0},"cod":"200","message":0.1062222,"cnt":7,"list":[{"dt":1492369200,"temp":{"day":85.06,"min":47.95,"max":86.36,"night":47.95,"eve":79.86,"morn":69.93},"pressure":962.74,"humidity":32,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.31,"deg":214,"clouds":0},{"dt":1492455600,"temp":{"day":67.3,"min":43.74,"max":74.7,"night":54.12,"eve":73.35,"morn":43.74},"pressure":965.54,"humidity":34,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":1.26,"deg":205,"clouds":24},{"dt":1492542000,"temp":{"day":69.04,"min":50.41,"max":73.98,"night":51.44,"eve":72.16,"morn":50.41},"pressure":965.52,"humidity":59,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.32,"deg":216,"clouds":0},{"dt":1492628400,"temp":{"day":70.47,"min":51.84,"max":71.24,"night":55.6,"eve":71.24,"morn":51.84},"pressure":976,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":1.69,"deg":259,"clouds":13},{"dt":1492714800,"temp":{"day":65.19,"min":46.54,"max":70.92,"night":53.65,"eve":70.92,"morn":46.54},"pressure":978.11,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.53,"deg":287,"clouds":0},{"dt":1492801200,"temp":{"day":70.23,"min":47.28,"max":77.41,"night":58.73,"eve":77.41,"morn":47.28},"pressure":977.48,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.4,"deg":13,"clouds":0},{"dt":1492887600,"temp":{"day":74.43,"min":50.76,"max":81.97,"night":58.3,"eve":81.97,"morn":50.76},"pressure":973.79,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":0.81,"deg":34,"clouds":0}]};

export var APPID = '509790a8f36c46d996ea0467837df307';

export function fetchForecast(locationQuery, format, units, cnt) {
  var APPID = '509790a8f36c46d996ea0467837df307';
  var query = '?';
      query += locationQuery;
      query += '&format=' + format;
      query += '&units=' + units;
      query += '&cnt=' + cnt;
      query += '&APPID=' + APPID;
  fetch('http://api.openweathermap.org/data/2.5/forecast/daily' + query)
    .then(function(response) {
      console.log(response);
    }).then(function(response) {
      console.log(response.json());
    }).then(function(data) {
      return data;
    });
}
