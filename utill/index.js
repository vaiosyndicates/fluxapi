const moment = require('moment');


const parseISO =  (date) => {
  // let datetime = date,
  // start = new Date(datetime),
  // dateParts = datetime.split('-'),
  // y = parseInt(dateParts[0], 10),
  // m = parseInt(dateParts[1], 10),
  // d = parseInt(dateParts[2], 10),
  // end = new Date(y, m-1, d+1);
  const clean = moment(date).format();
  return clean
};

module.exports = { parseISO }