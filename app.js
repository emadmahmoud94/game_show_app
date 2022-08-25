const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const letter = document.getElementsByClassName('letter');
let missed = 0;
const ul = document.getElementById('phrase');

const phrases = ['Cleveland Browns'.toLowerCase(), 'Miami Dolphins'.toLowerCase(), 'Houston Texans'.toLowerCase(), 'Las Vegas Raiders'.toLowerCase(), 'Kansas City Chiefs'.toLowerCase()];

startButton.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {
    const randomPhraseNum = Math.floor(Math.random() * phrases.length);
    randomPhrase = phrases[randomPhraseNum]
    const splitPhrase = randomPhrase.split('');
    return splitPhrase;
};
let splitPhrase = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay() {
    for(let i = 0; i < splitPhrase.length; i++) {
        let li = document.createElement('li');
        let letter = splitPhrase[i];
        li.textContent = letter;
        ul.appendChild(li);
        if(letter !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
};

addPhraseToDisplay(splitPhrase);

function checkLetter(button) {
    let match = null;
    for(i = 0; i <letter.length; i++) {
        if(letter[i].textContent === button.textContent) {
            const showLetter = letter[i].classList.add('show');
            match = showLetter;
            return match;
        }
    }
};

qwerty.addEventListener('click', (e) => {
    let clicked = e.target;
    if(e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
        clicked.classList.add('chosen');
        const letterFound = checkLetter(clicked);
    }
});

