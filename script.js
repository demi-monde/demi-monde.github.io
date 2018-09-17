var t = 0,
    subjects = ['NIGHT', 'DEMI-MONDE', 'THEATRE', 'BOUQUET', 'FORTUNE', 'STANDING',
        'DUTY', 'VILLAGE', 'CITY', 'LOVE', 'WOMAN', 'GAME', 'COURTESAN',
        'LOVER', 'DEATH', 'DINNER', 'HEALTH', 'LETTER', 'THING', 'DISEASE'
    ],

    predicates = ['BEAUTIFUL', 'INNOCENT', 'WHITE', 'MAD', 'TRUE', 'FEVERISH',
        'HONEST', 'BORING', 'RICH', 'DARK', 'SELFLESS', 'RED', 'SUITABLE',
        'JEALOUS', 'WELCOMING', 'DECEITFUL', 'NOBLE', 'FALLEN', 'PERVERSE', 'POOR'
    ],

    conjunctions = [' AND ', ' OR ', ' THEREFORE ', ' BUT ', ' BECAUSE ', '. ', '. ', '. ', '. ', '. '],
    operators = ['A', 'EVERY', 'NO', 'NOT EVERY'];

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}

function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}

function phrase() {
    "use strict";
    var text = choose(operators) + ' ' + choose(subjects);
    if (text === 'A EYE') {
        text = 'AN EYE';
    }
    return text + ' IS ';
}

function litany() {
    "use strict";
    var last, text, main = document.getElementById('main');
    if (25 > t) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    text = phrase() + choose(predicates) + choose(conjunctions);
    text = text + phrase() + choose(predicates) + '.';
    last.innerHTML = text;
    main.appendChild(last);
}

function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 2000);
}