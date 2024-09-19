function isWeekend(day) {
  const time = day.format("dddd");
  return time === "Saturday" || time === "Sunday";
}
export default isWeekend;
