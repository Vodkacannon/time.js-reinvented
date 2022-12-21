//A module for time related functions.
//Please see LICENSE.txt for MIT license information.

//Various time constants in order of precedence.
const one_day = 1;

const days_in_week = 7 * one_day;
const weeks_in_year = 52;
const days_in_year = weeks_in_year * days_in_week;
const months_in_year = 12;

const days_in_month_average = days_in_year / months_in_year;
const days_in_leap_year_month_average = days_in_leap_year / days_in_month_average;
const days_in_leap_year = days_in_year + one_day;

const one_second = 1;
const seconds_in_minute = 60;
const minute_seconds = one_second * seconds_in_minute;
const seconds_in_hour = 60;
const hour_seconds = minute_seconds * seconds_in_hour;
const hours_in_day = 24;

const one_day_seconds = hour_seconds * hours_in_day;
const one_week_seconds = one_day_seconds * days_in_week;
const one_year_seconds = one_week_seconds * days_in_year;

const leap_year_seconds = one_year_seconds + day_seconds;

const minutes_in_hour = 60;
const minutes_in_day = minutes_in_hour * hours_in_day;
const minutes_in_week = minutes_in_day * days_in_week;
const minutes_in_year = minutes_in_day * days_in_year;
const minutes_in_leap_year = minutes_in_day * days_in_leap_year;

const hours_in_week = hours_in_day * days_in_week;
const hours_in_year = hours_in_day * days_in_year;
const hours_in_leap_year = hours_in_day * days_in_leap_year;

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

