import moment from 'moment-timezone';

export function get_right_now() {
    const local_time = moment().tz("Europe/Oslo").format('HH:mm');
    return `My local time is: ${local_time}`;
}

export function get_activity_now() {
    const local_time = moment().tz("Europe/Oslo").hour();

    if (local_time >= 0 && local_time < 8) {
        return get_sleeping_text();
    }

    if (local_time >= 8 && local_time < 16) {
        return get_study_text();
    }

    if (local_time >= 16 && local_time <= 17) {
        return get_cooking_text();
    }

    if (local_time > 17 && local_time < 24) {
        return get_free_text();
    }
}

export function get_emoji_now() {
    const local_time = moment().tz("Europe/Oslo").hour();

    if (local_time >= 0 && local_time < 8) {
        return '💤';
    } else if (local_time >= 8 && local_time < 16) {
        return '👨‍💻';
    } else if (local_time >= 16 && local_time <= 17) {
        return '☕';
    } else if (local_time > 17 && local_time < 24) {
        return '📚';
    }
}

function get_sleeping_text() {
    let rand = Math.floor(Math.random() * 5);
    switch (rand) {
        case 0:
            return 'zZZzzz Mimimimi...';
        case 1:
            return 'looking at the back of my eyelids';
        case 2:
            return 'currently slumbering off';
        case 3:
            return 'currently hibernating...';
        default:
            return 'In my nightly coma';
    }
}

function get_cooking_text() {
    let rand = Math.floor(Math.random() * 2);

    switch (rand) {
        case 0:
            return 'Cooking up some immaculate food';
        default:
            return 'Cooking up some Hearty Durians';
    }
}

function get_study_text() {
    let rand = Math.floor(Math.random() * 6);

    switch (rand) {
        case 0:
            return 'Doing important student stuff';
        case 1:
            return 'Off to Hogwarts learning new spells';
        case 2:
            return 'Feeding on some books';
        case 3:
            return 'Currently studying';
        case 4:
            return 'Compiling new knowledge to my brain';
        default:
            return 'Integrating new knowledge';
    }
}

function get_free_text() {
    let rand = Math.floor(Math.random() * 9);

    switch (rand) {
        case 0:
            return 'Hobbying my hobbies';
        case 1:
            return 'Hacking together some side project magic';
        case 2:
            return 'Fighting off Voldemort';
        case 3:
            return 'Bouldering on some boulders!';
        case 4:
            return 'Currently reading a new book';
        case 5:
            return 'Currently doing homework';
        case 6:
            return 'Watching a ghibli movie';
        case 7:
            return 'Trying not to kill my plant';
        default:
            return 'Looking for Korok seeds...';
    }
}