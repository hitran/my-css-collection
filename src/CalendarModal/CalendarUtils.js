export const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};

export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const timeFormatter = (time) => {
    if (time > 12) {
        return `${time - 12} PM`;
    } else if (time === 12) {
        return `${time} PM`;
    }
    return `${time} AM`;
}

// TIME TYPE
export const START_TIME = 'start time';
export const END_TIME = 'end time';

// GET TMR TIME
export const getTmrTime = (todayTime) => {
    return todayTime + 24 * 60 * 60 * 1000;
}

// CONSTANTS
export const ZERO = 0;
export const ONE = 1;
export const FOURTEEN = 14;