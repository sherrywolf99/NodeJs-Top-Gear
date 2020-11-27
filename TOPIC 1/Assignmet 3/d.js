// get total seconds between the timess
var delta = Math.abs(date_future - date_now) / 1000;

calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
delta -= days * 86400;


var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;


var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;


var seconds = delta % 60;  