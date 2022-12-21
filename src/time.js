//A module for time related functions.
//Please see LICENSE.txt for MIT license information.

//Various time constants.
var months_in_year = 12;

var days_in_year = 365;
var days_in_leap_year = 366;

var days_in_month_average = days_in_year / months_in_year;
var days_in_leap_year_month_average = days_in_leap_year / days_in_month_average;

var day = 1;
var days_in_week = 7 * day;


var 

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