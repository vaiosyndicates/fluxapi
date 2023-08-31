const moment = require('moment');


const parseISO =  (date) => {
  const clean = moment(date).format();
  return clean
};

module.exports = { parseISO }