const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const letter = document.getElementsByClassName('letter');
const ul = document.getElementById('phrase');
const heartImg = document.querySelectorAll('img');
let missed = 0;
let match = null;
const overlay = document.getElementById('overlay');
const h2 = document.querySelector('h2');

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
    for(i = 0; i <letter.length; i++) {
        if(letter[i].textContent === button.textContent) {
            const showLetter = letter[i].classList.add('show');
            match = showLetter;
        }
    }
    return match;
};

qwerty.addEventListener('click', (e) => {
    let clicked = e.target;
    if(e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
        clicked.classList.add('chosen');
        const letterFound = checkLetter(clicked);
        checkWin();
        if(match === null) {
            heartImg[missed].src = 'images/lostHeart.png';
            missed +=1;
            checkLoss();
        }
    }
});

function checkWin(){
    const show = document.getElementsByClassName('show');
    const letter = document.getElementsByClassName('letter');
    if(show.length === letter.length) {
        h2.innerHTML = 'You Win!';
        overlay.classList.add('win');
        overlay.style.display = 'flex';
    }
};

function checkLoss() {
if(missed > 4) {
    h2.innerHTML = 'You Lose!';
    overlay.classList.add('lose');
    overlay.style.display = 'flex';
}
};

