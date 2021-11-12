'use strict';

let secretNum = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(msg){
    document.querySelector('.message').textContent = msg;
};
const displayNumberContent = function(content){
    document.querySelector('.number').textContent = content;
};


// CHECK BUTTON...
document.querySelector('.check').addEventListener('click', function(){
    const guessNum = Number(document.querySelector('.guess').value);
    // console.log(guessNum, typeof(guessNum))

    //no input
    if (!guessNum){
        displayMessage('No Number');  
    
    //when palyer wins
    }else if (guessNum === secretNum){
        displayMessage('Correct Number');
        // document.querySelector('.highscore').textContent = String(score);
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayNumberContent(secretNum);
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // when guess is not eqal to secret number.
    }else if (guessNum !== secretNum){
        displayMessage(guessNum>secretNum ? 'Too High': 'Too Low')
        if (score > 1){
            score -= 1;
            document.querySelector('.score').textContent = String(score);
        }else{
            displayMessage('You lost the game...');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// AGAIN BUTTON..
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNum = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    displayNumberContent('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})