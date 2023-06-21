'use strict';

const select = function(ps){
document.querySelector('.${ps}')
}
let scoree0 = document.querySelector('#score--0');
let scoree1 = document.querySelector('#score--1');
let current00 = document.querySelector('#current--0');
let current01 = document.querySelector('#current--1');

const  btnDice = document.querySelector('.dice');
const  btnNewGame = document.querySelector('.btn--new');
const  btnRollD = document.querySelector('.btn--roll');
const  btnHold = document.querySelector('.btn--hold');


scoree0.textContent = 0;
scoree1.textContent = 0;
btnDice.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing=true;

const switchPlayer = function(){
    if(playing){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore=0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    let inactivePlayer;
    if(activePlayer===0){
        inactivePlayer = 1;
    } else { inactivePlayer = 0;}
    console.log(activePlayer, inactivePlayer);
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    document.querySelector(`.player--${inactivePlayer}`).classList.remove('player--active');
}
};

btnRollD.addEventListener('click', function(){
    if(playing){
    let dicescore = Math.trunc((Math.random()*6)+1);
    console.log(dicescore);

btnDice.classList.remove('hidden');
btnDice.src = `dice-${dicescore}.png`;
//current01.textContent = 30;
if(dicescore !== 1){
    currentScore = currentScore+dicescore;

  //  current00.textContent = currentScore;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    console.log(`current score is ${currentScore}`);
} else {
   
    currentScore = 0;
   switchPlayer();
}
    }
});

btnHold.addEventListener('click', function(){
    if(playing)
   scores[activePlayer]+=currentScore;
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
   document.querySelector(`#current--${activePlayer}`).textContent = 0;
   console.log(`score of ${scores[activePlayer]} is : `);
 //  document.querySelector(`#current--${inactivePlayer}`).textContent = 0;
   if(scores[activePlayer]>=100){
   playing = false;
   document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
   document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
   
} else { switchPlayer() };

});
