//A module for time related functions.
//Please see LICENSE.txt for MIT license information.

//Various timing constants.
const one_day = 1;
const days_in_week = 7;

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

const epoch_date = DateReinvented(1970, 1, 1, 0, 0, 0, 0);

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


function seconds_between_months(month_one, month_two, year) {
    let total_seconds = 0;

    if (month_one < month_two) {
        for (let i = month_one; i < month_two; i++) {
            total_seconds += seconds_in_month_of_a_year(i, year);
        }
    }
    else {
        for (let i = month_two; i < month_one; i++) {
            total_seconds += seconds_in_month_of_a_year(i, year);
        }
    }
    return total_seconds;
}


function minutes_between_months(month_one, month_two, year) {
    let total_minutes = 0;

    if (month_one < month_two) {
        for (let i = month_one; i < month_two; i++) {
            total_minutes += minutes_in_month_of_a_year(i, year);
        }
    }
    else {
        for (let i = month_two; i < month_one; i++) {
            total_minutes += minutes_in_month_of_a_year(i, year);
        }
    }
    return total_minutes;
}


function hours_between_months(month_one, month_two, year) {
    let total_hours = 0;

    if (month_one < month_two) {
        for (let i = month_one; i < month_two; i++) {
            total_hours += hours_in_month_of_a_year(i, year);
        }
    }
    else {
        for (let i = month_two; i < month_one; i++) {
            total_hours += hours_in_month_of_a_year(i, year);
        }
    }
    return total_hours;
}


function days_between_months(month_one, month_two, year) {
    let total_days = 0;

    if (month_one < month_two) {
        for (let i = month_one; i < month_two; i++) {
            total_days += days_in_month_of_year(i, year);
        }
    }
    else {
        for (let i = month_two; i < month_one; i++) {
            total_days += days_in_month_of_year(i, year);
        }
    }
    return total_days;
}


function weeks_between_months(month_one, month_two, year) {
    let total_weeks = 0;

    if (month_one < month_two) {
        for (let i = month_one; i < month_two; i++) {
            total_weeks += weeks_in_month_of_a_year(i, year);
        }
    }
    else {
        for (let i = month_two; i < month_one; i++) {
            total_weeks += weeks_in_month_of_a_year(i, year);
        }
    }
    return total_weeks;
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


DateReinvented = class {
    constructor(year, month, day, hour, minute, second, is_pm) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.is_pm = is_pm;
    }


    get_date_string(am_pm_type, is_space_between_am_pm_and_time) {
        if (is_space_between_am_pm_and_time) {
            return this.year + "-" + this.month + "-" + this.day + " " + this.hour + ":" + this.minute + ":" + this.second + " " + am_pm_type;
        } else {
            return this.year + "-" + this.month + "-" + this.day + " " + this.hour + ":" + this.minute + ":" + this.second + am_pm_type;
        }
    }


    set_date(year, month, day, hour, minute, second, is_pm) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.is_pm = is_pm;
    }

    seconds_since_epoch(date_two) {
        return difference_between_dates_as_seconds(epoch_date, date_two);
    }
}


function difference_between_dates_as_seconds(date_one, date_two) {
    let seconds = 0;

    seconds += seconds_between_years(date_one.year, date_two.year);
    seconds += seconds_between_months(date_one.month, date_two.month, date_one.year);
    seconds += seconds_between_days(date_one.day, date_two.day);
    seconds += seconds_between_hours(date_one.hour, date_two.hour);
    seconds += seconds_between_minutes(date_one.minute, date_two.minute);
    seconds += (date2.second - date1.second);

    return seconds;
}


function difference_between_dates_as_minutes(date_one, date_two) {
    let minutes = 0;

    minutes += minutes_between_years(date_one.year, date_two.year);
    minutes += minutes_between_months(date_one.month, date_two.month, date_one.year);
    minutes += minutes_between_days(date_one.day, date_two.day);
    minutes += minutes_between_hours(date_one.hour, date_two.hour);
    minutes += (date2.minute - date1.minute);

    return minutes;
}


function difference_between_dates_as_hours(date_one, date_two) {
    let hours = 0;

    hours += hours_between_years(date_one.year, date_two.year);
    hours += hours_between_months(date_one.month, date_two.month, date_one.year);
    hours += hours_between_days(date_one.day, date_two.day);
    hours += (date2.hour - date1.hour);

    return hours;
}


function difference_between_dates_as_days(date_one, date_two) {
    let days = 0;

    days += days_between_years(date_one.year, date_two.year);
    days += days_between_months(date_one.month, date_two.month, date_one.year);
    days += (date2.day - date1.day);

    return days;
}


function difference_between_dates_as_weeks(date_one, date_two) {
    let weeks = 0;

    weeks += weeks_between_years(date_one.year, date_two.year);
    weeks += weeks_between_months(date_one.month, date_two.month, date_one.year);
    weeks += (date2.day - date1.day) / days_in_week;

    return weeks;
}


function difference_between_dates_as_months(date_one, date_two) {
    let months = 0;

    months += months_between_years(date_one.year, date_two.year);
    months += date2.month - date1.month;

    return months;
}

Clock = class {
    constructor(year, month, day, hour, minute, second, is_pm) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.is_pm = is_pm;
        this.is_running = false;
    }

    loop() {
        while (this.is_running) {
            sleep_for_seconds(1);
            this.second += 1;
        }
    }

    start() {
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth() + 1;
        this.day = new Date().getDate();
        this.hour = new Date().getHours();
        this.minute = new Date().getMinutes();
        this.second = new Date().getSeconds();
        sleep_for_seconds(1);
        loop();
    }

    update_clock() {
        if (this.month % months_in_year == 0) {
            this.month = 1;
        }

        if (this.day % days_in_month_of_year(this.year) == 0) {
            this.day = 1;
            this.month += 1;
        }

        if (this.hour % hours_in_day == 0) {
            this.hour = 1;
            this.day += 1;
        }

        if (this.minute % minutes_in_hour == 0) {
            this.minute = 0;
            this.hour += 1;
        }

        if (this.second % seconds_in_minute == 0) {
            this.second = 0;
            this.minute += 1;
        }

        if (this.second == seconds_in_minute && this.minute == minutes_in_hour && this.hour == hours_in_day && this.day == days_in_month_of_year(year) && this.month == months_in_year) {
            this.second = 0;
            this.minute = 0;
            this.hour = 12;
            this.day = 1;
            this.month = 1;
            this.year += 1;
        }
    }
}