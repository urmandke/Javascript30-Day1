window.addEventListener('keydown', playSound);

// playSound - plays sound when appropiate key is played
function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio){
    return; // stop the function from running.
  }
  audio.currentTime = 0; // rewind to the start.
  audio.play();
  key.classList.add("playing");
}

// Remove Transition function - removes playing class from the key divs 
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log(this.classList.remove('playing'));
}

// Get all keys divs in document.
const keys = document.querySelectorAll('.key');

// Add an EventListener of transitionend event to all key divs
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

