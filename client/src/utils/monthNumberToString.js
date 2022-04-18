const monthNumberToString = (month = 0) => {
  const data = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return data[month]
};

export default monthNumberToString
