# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// events
// foreach loop ( functionn callback )
buttons.forEach(function (button) {
  console.log(button);
  // listening event that are happening  in which we are using click event  
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // identifying the event id that is clicked
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## project 2 solution

```javascript

// selecting the form first 
const form = document.querySelector('form');
// this usecase will give you empty value if clicked therefore inside event 
// const height = parseInt(document.querySelector('#height').value)

//adding event submit 
form.addEventListener('submit', function (e) {
  //preventing default submision
  e.preventDefault();

// giving value using selecting id and passing in int form
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    // adding value in result 
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result in 2 decimal upto
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## project 3 solution code

```javascript


// selecting element
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

// to take time and update at each second
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution


```javascript

// genetrating a random number in int form
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


// creating paragraph
const p = document.createElement('p');

// array creating  
let prevGuess = [];
let numGuess = 1;

// to start game ( if it false then game end)
let playGame = true;

//if true for playing gamee 
if (playGame) {
  //addinlg event 
  submit.addEventListener('click', function (e) {
    //preventing default to go to server to take value
    e.preventDefault();
    // taking value from input user
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// to validate guess number is correct 
function validateGuess(guess) {
  //checking number
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//check value guess is correct/low/high
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  //adding guesses
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  //updating remain guess 
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  //message displaying(paragraph) message which come from above cases 
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //clearing inputs
  userInput.value = '';
  //setting attribute so that cannot enter further value
  userInput.setAttribute('disabled', '');
  //adding button to restart game
  p.classList.add('button');
  //in paragraph adding new graph message 
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;\
  // adding new paragraph 
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //taking refrence of same button 
  const newGameButton = document.querySelector('#newGame');
  //creating click event
  newGameButton.addEventListener('click', function (e) {
    // resetting all variables
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```


# Project 5 solution

```javascript
// seeing pressed key

const insert = document.getElementById('insert');
//to add event in whole window
window.addEventListener('keydown', (e) => {
  
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td> 
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  ` //if value is empty add space;
});


```

# Project 6 Solution

```javascript
//generate a random color

// generating a random hex colour 
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// start changing colour function
// setting interval for changing colour 
let intervalId;//declared in global scope
const startChangingColor = function () {
  if (!intervalId) { //checking if not null then only run 
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    // taking refrence of style background color refrence
    document.body.style.backgroundColor = randomColor();
  }
};
    // stop changing colour function
    // taking refrence of declared intervalId for clear intervalID
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;// corner case flusing out intervalId i.e. derefrencing intervalId  
};

// taking start and stop button refrence  
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

// do process by process # how he does thingd the importance of thought
```