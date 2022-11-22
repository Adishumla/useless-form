const form_container = document.querySelector('.form-container');

form_container.innerHTML = `
<form>
  <input type="text" name="name" placeholder="Owen" />
  <input type="text" name="surname" placeholder="Wilson" />
  <input type="submit" value="Submit" />
</form>
`;

qoutes = [
  'Please enter your name',
  'Why is it so hard to enter your name?',
  'I am not going to ask again',
  '...',
  '...',
  'Why are you still here?',
  '...',
  'How about you just enter your name?',
  'It is not that hard',
  '...',
];
const admin = document.querySelector('.admin');

/* print each qoute one by one */

/* array with random positions */
/* const random_positions = [
  'translate(100%, 60%)',
  'translate(60%, 90%)',
  'translate(70%, 60%)',
  'translate(90%, 70%)',
]; */

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
  'Please enter your name',
  'Why is it so hard to enter your name?',
  'I am not going to ask again',
  '...',
  '...',
  'Why are you still here?',
  '...',
  'How about you just enter your name?',
  'It is not that hard',
  '...',
];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 5000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

/* on input hover move input field to other side */
const input = document.querySelector('input');
input.addEventListener('mouseover', () => {
  input.style.transform = 'translate(100%, 60%)';
});
