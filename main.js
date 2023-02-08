
window.addEventListener('load',init)
// Global Variables

// Available Levels

var levels = {
    easy: 5,
    medium:3,
    hard:2
}

var currentlevel = levels.easy;

let time = currentlevel;
let score =0;
let isPlaying;



// DOM Elements

const wordInput = document.querySelector('#word-input')
const currentword = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')



// Array of Words

const words = [
    'Ankit',
    'Rohan',
    'Katrina',
    'Gopal',
    'Ojas',
    'Photoholic',
    'kunal',
    'Abhishek',
    'Deep',
    'Travel',
    'Explore',
    'NorthernLights',
    'Himalaya',
    'London',
    'LasVegas',
    'Paris',
    'Goa',
    'Meghalaya',
    'Heavy-Driver',
    'Long-hair'

];

// Initializing beat the word here ...

function init()
{
    //Showing number of Seconds in UI
    seconds.innerHTML=currentlevel
    // ----------Loading Word from the Array here------------
    
    showWord(words);
    //----Word Input Match
    wordInput.addEventListener('input',startMatch)


    //-------- Calling Count down here every second------------
    setInterval(countdown,1000); 
    // 1k MS = 1 sec
    setInterval(checkstatus,50);

}


function startMatch()
{
    if(matchWords())
    {
        isPlaying = true;
        time = currentlevel+1;
        showWord(words)
        wordInput.value='';
        score++;

    }
    if(score==-1)
    {
        scoreDisplay.innerHTML = 0;

    }
    else{
        scoreDisplay.innerHTML=score;
    }
    
   

}

// another function for matching words that is inside startmatch function
function matchWords()
{
    if(wordInput.value ===currentword.innerHTML)
      {
          message.innerHTML="Correct !!!";
          return true;
      } else{
          message.innerHTML='keep typing...keep typing...';
          return false;
      }

}

// Here Picking any random word  & it will be shown in the web

function showWord(words)
{

   

    const randIndex = Math.floor(Math.random() * words.length);

    // Getting Random Word (random output)
    currentword.innerHTML = words[randIndex];

}



// CountDown Timer

function countdown()
{
    // Time Limit
    if(time > 0)
    {
        // Decreassing in time
        time--

    }else if(time==0)
    {
        // haha
        isPlaying =false;

    }

    // Display of Time in Web Display using DOM Manipulation

    timeDisplay.innerHTML = time;

}

// Status of Game checking here..

function checkstatus() {

   if(!isPlaying && time === 0)
   {
     message.innerHTML="Game Over !!!!"
    }

}


