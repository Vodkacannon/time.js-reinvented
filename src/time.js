//A module for time related functions.
//Please see LICENSE.txt for MIT license information.

//Various time constants in order of precedence.
const one_day = 1;
const days_in_week = 7 * day;
const weeks_in_year = 52;
const days_in_year = weeks_in_year * days_in_week;
const months_in_year = 12;
const days_in_month_average = days_in_year / months_in_year;
const days_in_leap_year = days_in_year + one_day;
const days_in_leap_year_month_average = days_in_leap_year / days_in_month_average;

const one_second = 1;

//sec == second.
const minute_sec = one_second * 60;
const hour_sec = minute_sec * 60;
const day_sec = hour_sec * 24;
const week_sec = day_sec * 7;
const year_sec = week_sec * 365;
const leap_year_sec = year_sec + day_sec;

function is_leap_year(year) {
    if (year % 4 != 0) return false;
    else if (year % 100 != 0) return true;
    else if (year % 400 != 0) return false;
    else return true;
}

function days_in_month_of_year(month, year) {
    if (month == 2) {
        if (is_leap_year(year)) { return 29; }
        else { return 28; }
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) return 30;
    else return 31;
}

function seconds_in_month_of_year(month, year) {
    return days_in_month_of_year(month, year) * day_sec;
}