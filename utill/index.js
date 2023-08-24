const parseISO =  (date) => {
  let datetime = date,
  start = new Date(datetime),
  dateParts = datetime.split('-'),
  y = parseInt(dateParts[0], 10),
  m = parseInt(dateParts[1], 10),
  d = parseInt(dateParts[2], 10)
  const clean = start.toISOString()
  return clean
};

module.exports = { parseISO }