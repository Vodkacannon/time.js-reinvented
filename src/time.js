//Various time constants.
var one_second = 1;
//sec == second.
var minute_sec = one_second * 60;
var hour_sec = minute_sec * 60;
var day_sec = hour_sec * 24;
var week_sec = day_sec * 7;
var year_sec = week_sec * 365;
var leap_year_sec = year_sec + day_sec;

function is_leap_year(year) {
    if (year % 4 != 0) return false;
    else if (year % 100 != 0) return true;
    else if (year % 400 != 0) return false;
    else return true;
}