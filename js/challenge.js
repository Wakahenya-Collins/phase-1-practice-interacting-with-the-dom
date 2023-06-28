// Retrieve necessary DOM elements
const counter = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const unlikeButton = document.getElementById('unlike');
const pauseButton = document.getElementById('pause',);
const restartButton = document.getElementById('restart');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');

// Counter variables
let count = 0;
let intervalId;
let isPaused = false;

// Function to update the counter display
function updateCounterDisplay() {
  counter.innerText = count;
}

// Function to start the timer
function startTimer() {
  intervalId = setInterval(() => {
    count++;
    updateCounterDisplay();
  }, 1000);
}

// Function to increment the counter
function incrementCounter() {
  count++;
  updateCounterDisplay();
}

// Function to decrement the counter
function decrementCounter() {
  count--;
  updateCounterDisplay();
}

// Function to handle the "like" button click
function handleLikeButtonClick() {
  const existingLike = document.getElementById(`like-${count}`);

  if (existingLike) {
    existingLike.dataset.likes++;
    existingLike.innerText = `${count} has been liked ${existingLike.dataset.likes} times`;
  } else {
    const newLike = document.createElement('li');
    newLike.id = `like-${count}`;
    newLike.dataset.likes = 1;
    newLike.innerText = `${count} has been liked 1 time`;
    likesList.appendChild(newLike);
  }
}

// Function to handle the "unlike" button click
function handleUnlikeButtonClick() {
  const existingLike = document.getElementById(`like-${count}`);

  if (existingLike) {
    existingLike.dataset.likes--;
    existingLike.innerText = `${count} has been liked ${existingLike.dataset.likes} times`;

    if (existingLike.dataset.likes === '0') {
      existingLike.remove();
    }
  }
}

// Function to pause the counter
function pauseCounter() {
  clearInterval(intervalId);
  isPaused = true;

  minusButton.disabled = true;
  plusButton.disabled = true;
  heartButton.disabled = true;
  unlikeButton.disabled = true;

  pauseButton.innerText = 'Resume';
}

// Function to resume the counter
function resumeCounter() {
  startTimer();
  isPaused = false;

  minusButton.disabled = false;
  plusButton.disabled = false;
  heartButton.disabled = false;
  unlikeButton.disabled = false;

  pauseButton.innerText = 'Pause';
}

function togglePause() {
    if (isPaused) {
      resumeCounter();
    } else {
      pauseCounter();
    }
  }
// Function to handle the "restart" button click
function handleRestartButtonClick() {
  clearInterval(intervalId);
  count = 0;
  updateCounterDisplay();

  minusButton.disabled = false;
  plusButton.disabled = false;
  heartButton.disabled = false;
  unlikeButton.disabled = false;

  if (isPaused) {
    resumeCounter();
  } else  {
    resumeCounter()
  }
}

// Function to handle comment submission
function handleCommentFormSubmit(event) {
  event.preventDefault();
  const comment = commentInput.value;
  const commentItem = document.createElement('div');
  commentItem.innerText = comment;
  commentsList.appendChild(commentItem);
  commentInput.value = '';
}

// Add event listeners
window.addEventListener('DOMContentLoaded', startTimer);
minusButton.addEventListener('click', decrementCounter);
plusButton.addEventListener('click', incrementCounter);
heartButton.addEventListener('click', handleLikeButtonClick);
unlikeButton.addEventListener('click', handleUnlikeButtonClick);
pauseButton.addEventListener('click', togglePause);

restartButton.addEventListener('click', handleRestartButtonClick);
commentForm.addEventListener('submit', handleCommentFormSubmit);

console.log ('Hello')