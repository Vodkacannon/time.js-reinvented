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

const hours_in_day = 24;

const one_second = 1;
const miliseconds_in_second = one_second * 1000;
const miliseconds_in_minute = miliseconds_in_second * seconds_in_minute;
const seconds_in_minute = one_second * 60;
const seconds_in_hour = seconds_in_minute * minutes_in_day;
const seconds_in_day = seconds_in_hour * hours_in_day;
const seconds_in_week = seconds_in_day * days_in_week;
const seconds_in_year = seconds_in_week * days_in_year;
const seconds_in_leap_year = seconds_in_year + seconds_in_day;

const minutes_in_hour = 60;
const minutes_in_day = minutes_in_hour * hours_in_day;
const minutes_in_week = minutes_in_day * days_in_week;
const minutes_in_year = minutes_in_day * days_in_year;
const minutes_in_leap_year = minutes_in_day * days_in_leap_year;

const hours_in_week = hours_in_day * days_in_week;
const hours_in_year = hours_in_day * days_in_year;
const hours_in_leap_year = hours_in_day * days_in_leap_year;

const am_lowercase = "am";
const am_uppercase = "AM";
const pm_lowercase = "pm";
const pm_uppercase = "PM";
const am_period_lowercase = "a.m.";
const am_period_uppercase = "A.M.";
const pm_period_lowercase = "p.m.";
const pm_period_uppercase = "P.M.";

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

function seconds_in_month_of_a_year(month, year) {
    return days_in_month_of_year(month, year) * seconds_in_day;
}

function minutes_in_month_of_a_year(month, year) {
    return days_in_month_of_year(month, year) * minutes_in_day;
}

function hours_in_month_of_a_year(month, year) {
    return days_in_month_of_year(month, year) * hours_in_day;
}

function weeks_in_month_of_a_year(month, year) {
    return days_in_month_of_year(month, year) / days_in_week;
}

function get_seconds_in_year(year) {
    if (is_leap_year(year)) return seconds_in_leap_year;
    else return seconds_in_year;
}

function get_minutes_in_year(year) {
    if (is_leap_year(year)) return minutes_in_leap_year;
    else return minutes_in_year;
}

function get_hours_in_year(year) {
    if (is_leap_year(year)) { return hours_in_leap_year; }
    else { return hours_in_year; }
}

function seconds_between_minutes(minute_one, minute_two) {
    return (minute_one - minute_two) * seconds_in_minute;
}

function seconds_between_hours(hour_one, hour_two) {
    return (hour_two - hour_one) * seconds_in_hour;
}

function seconds_between_days(day_one, day_two) {
    return (day_two - day_one) * seconds_in_day;
}

//This will take some work due to the fact that months are not all the same length.
function seconds_between_months(month_one, month_two) {
    return (month_two - month_one) * seconds_in_month;
}

function seconds_between_years(year_one, year_two) {
    return (year_two - year_one) * seconds_in_year;
}

function minutes_between_hours(hour_one, hour_two) {
    return (hour_two - hour_one) * minutes_in_hour;
}

async function sleep_for_miliseconds(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds_in_second));
}

async function sleep_for_seconds(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * miliseconds_in_second));
}

async function sleep_for_minutes(minutes) {
    return new Promise(resolve => setTimeout(resolve, seconds * miliseconds_in_minute));
}

class Date {
    constructor(year, month, day, hour, minute, second, is_pm) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.is_pm = is_pm;
    }
}

function get_date() {
    var date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
}

function difference_between_dates_as_seconds(date_one, date_two) {
    let seconds = 0;
    seconds += seconds_between_years(date_one.year, date_two.year);
    seconds += seconds_between_hours(date_one.hour, date_two.hour);
    seconds += seconds_between_minutes(date_one.minute, date_two.minute);
    seconds += (date2.second - date1.second);
    return seconds;
}

function difference_between_dates_as_minutes(date_one, date_two) {
    let minutes = 0;
    minutes += minutes_between_years(date_one.year, date_two.year);
    minutes += minutes_between_hours(date_one.hour, date_two.hour);
    minutes += (date_two.minute - date_one.minute);
    return minutes;
}