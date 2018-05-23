const startDay = 1; // [0 - Sunday, 1 - Monday, ...but more than 1 not tested]

const normalizeDay = function (day) {
  if (day - startDay < 0) {
    return 7 + (day - startDay);
  } else {
    return day - startDay;
  }
};
const getWeeksInMonth = function(date) {
	const first = new Date(date.getFullYear(), date.getMonth(), 1);
	const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	const checker = normalizeDay(first.getDay());
	let last_check = checker;
	let last_check_date = new Date(first);
  const weeks = [];
  weeks.push([]);
  
	first.setDate(first.getDate() + 1);

  for (let i = 0; i <= 100; i++) {
    if (checker === normalizeDay(first.getDay())) {
      weeks.push([]);
      last_check = normalizeDay(first.getDay());
      last_check_date = new Date(first);
      //console.log(last_check, last_check_date);
    }
    if (first.getDate() + 1 <= last.getDate()) {
      first.setDate(first.getDate() + 1);
    } else { 
    	break; 
    }
  } 
	
  if (last_check_date.getDate() < last.getDate()) {
    if (normalizeDay(last.getDay()) < normalizeDay(last_check_date.getDay())) {
      weeks.push([]);
    }
  }
  
  return weeks.length;
};


for (let i = 0; i <= 11; i++) {
	const month = [5, 5, 5, 6, 5, 5, 6, 5, 5, 5, 5, 6];
	console.log(getWeeksInMonth(new Date(2018, i)) === month[i], i);
}



