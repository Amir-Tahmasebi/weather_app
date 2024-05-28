
const d = new Date();

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dayOfWeek = daysOfWeek[d.getDay()];
const month = months[d.getMonth()]
const day = d.getDay();
const today = d.toDateString().slice(0, 7);
const hours = d.getHours();
const minutes = d.getMinutes();

export const date = { today, dayOfWeek, hours, minutes, month, day }