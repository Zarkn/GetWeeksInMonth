const startDay = 1; // [0 - Sunday, 1 - Monday, ... but more than 1 not tested]

const normalizeDay = function (day) {
  if (day - startDay < 0) {
    return 7 + (day - startDay);
  } else {
    return day - startDay;
  }
};
const getWeeksInMonth = function(date) {
  const first_date = new Date(date.getFullYear(), date.getMonth(), 1);
  const last_date = {
    date: new Date(date.getFullYear(), date.getMonth() + 1, 0),
    check: {
      need: normalizeDay(first_date.getDay()),
      day: normalizeDay(first_date.getDay()),
      date: new Date(first_date),
    }
  };

  const weeks = [];
  weeks.push([]);

  first_date.setDate(first_date.getDate() + 1);

  for (let i = 0; i < 100; i++) {
    if (last_date.check.need === normalizeDay(first_date.getDay())) {
      weeks.push([]);
      last_date.check.day = normalizeDay(first_date.getDay());
      last_date.check.date = new Date(first_date);
    }
    if (first_date.getDate() + 1 <= last_date.date.getDate()) {
      first_date.setDate(first_date.getDate() + 1);
    } else {
      break;
    }
  }

  if (last_date.check.date.getDate() < last_date.date.getDate() && normalizeDay(last_date.date.getDay()) < normalizeDay(last_date.check.date.getDay())) {
    weeks.push([]);
  }

  return weeks.length;
};

// Test
for (let i = 0; i <= 11; i++) {
    const year = 2018;
    const names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(year, i);
    document.write(getWeeksInMonth(new Date(date)) + ' weeks in ' + names[i] + ' ' + year + '<br>');
}
