export function getDateFromReleased(createdTime) {
  let createdDate = new Date(createdTime);
  let currentDate = new Date();
  let yearFromReleased = currentDate.getFullYear() - createdDate.getFullYear();
  let monthFromReleased = currentDate.getMonth() - createdDate.getMonth();
  let dayFromReleased = currentDate.getDate() - createdDate.getDate();
  let weekFromReleased = Math.floor(dayFromReleased / 7);
  let hourFromReleased = currentDate.getHours() - createdDate.getHours();
  if (yearFromReleased >= 1) {
    return yearFromReleased + " " + "سال پیش";
  } else if (monthFromReleased >= 1) {
    return monthFromReleased + " " + "ماه پیش";
  } else if (weekFromReleased >= 1) {
    return weekFromReleased + " " + "هفته پیش";
  } else if (dayFromReleased >= 1) {
    return dayFromReleased + " " + "روز پیش";
  } else {
    return hourFromReleased + " " + "ساعت پیش";
  }
}
