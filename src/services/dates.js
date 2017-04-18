export function getDayOfWeek(dt, length) {
  var date = new Date(dt * 1000);
  var weekdaysShort = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  var weekdaysLong = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var weekday = length === 'short' ?
    weekdaysShort[ date.getDay() ] :
    weekdaysLong[ date.getDay() ];
  return weekday;
}

export function getMonthName(dt) {
  var date = new Date(dt * 1000);
  var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  var month = months[ date.getMonth() ];
  return month;
}

export function getLocalTime(dt) {
  var localDate = new Date();
  var offset = localDate.getTimezoneOffset() * 60;
  var dtLocal = dt + offset;
  return dtLocal;
}
