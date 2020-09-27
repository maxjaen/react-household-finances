// TODO do not overwrite prototype, use ES6 notation instead
Date.prototype.getWeek = () => {
  var firstOfJanuary = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(
    ((this - firstOfJanuary) / 86400000 + firstOfJanuary.getDay() + 1) / 7
  );
};

const createDate = () => {
  const date = new Date();
  date.setHours(date.getHours() + 2); // offset for german summertime
  return date;
};

const isToday = (date) => {
  const inputDate = new Date(date);
  const currentDate = createDate();

  return (
    inputDate.getDate() === currentDate.getDate() &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getFullYear() === currentDate.getFullYear()
  );
};

const isCurrentWeek = (date) => {
  const inputDate = new Date(date);
  const currentDate = createDate();

  return inputDate.getWeek() === currentDate.getWeek();
};

const isCurrentMonth = (date) => {
  const inputDate = new Date(date);
  const currentDate = createDate();

  return (
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getFullYear() === currentDate.getFullYear()
  );
};

const isCurrentYear = (date) => {
  const inputDate = new Date(date);
  const currentDate = createDate();

  return inputDate.getFullYear() === currentDate.getFullYear();
};

const isLaterDate = (later, earlier) => {
  return new Date(later).getTime() > new Date(earlier).getTime();
};

export {
  createDate,
  isToday,
  isCurrentWeek,
  isCurrentMonth,
  isCurrentYear,
  isLaterDate,
};
