/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying=true;

init();

document.querySelector(".btn-roll").addEventListener("click", () => {
    
    if (gamePlaying){
            // generate random dice value
            // display in current score of active player    
            var dice = Math.floor(Math.random()*6) + 1;
            document.querySelector(`#current-${activePlayer}`).innerHTML =`<em>${dice}</em>`;
            // display dice with right value
            document.querySelector(".dice").style.display = 'block'
            document.querySelector(".dice").src=`dice-${dice}.png`
            console.log(`.dice-${dice}.png`)
            // update round score unless dice value is 1.
            
            if(dice !== 1){
                roundScore += dice;
                document.querySelector("#current-"+activePlayer).textContent=roundScore;
            }

            else{
                nextplayer();
                    
            }
            }
    
})

// HOLD button functionality.
    document.querySelector(".btn-hold").addEventListener("click", () => {
        if (gamePlaying){

            scores[activePlayer] += roundScore;

            document.querySelector("#score-"+activePlayer).innerHTML= scores[activePlayer];
            // check if the player won the game

            if(scores[activePlayer] >=10){
            // message that 'activeplayer' has won! 
            document.querySelector("#name-" + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice').style.display = 'none';

            document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner");
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");   
            gamePlaying = false;
            }

            else {
            // nextplayer
            nextplayer();    
        }  
        }  
    })

// new button functinality

document.querySelector(".btn-new").addEventListener("click", init)

function init(){
    scores = [0,0];
    activePlayer=0;
    roundScore=0;

    document.querySelector('.dice').style.display = "none";

    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.querySelector("#current-0").innerHTML=0;
    document.querySelector("#current-1").innerHTML=0;

    document.querySelector("#name-0").textContent = 'Player-1'
    document.querySelector("#name-1").textContent = 'Player-2'

    document.querySelector(`.player-0-panel`).classList.remove("active");
    document.querySelector(`.player-1-panel`).classList.remove("active");

    document.querySelector(`.player-0-panel`).classList.remove("winner");
    document.querySelector(`.player-1-panel`).classList.remove("winner");

    document.querySelector(`.player-0-panel`).classList.add("active");
    gamePlaying=true;

}

function nextplayer(){
    activePlayer ===1 ? activePlayer =0 : activePlayer =1;      
        roundScore = 0;
        // document.querySelector("#score-"+activePlayer).innerHTML= 0;
        document.querySelector("#current-0").innerHTML=0;
        document.querySelector("#current-1").innerHTML=0;

        document.querySelector(`.player-0-panel`).classList.toggle("active");
        document.querySelector(`.player-1-panel`).classList.toggle("active");      

        document.querySelector(".dice").style.display = "none";     
}

        
