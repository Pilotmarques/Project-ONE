
var scores, roundScore, activeGambler, craps;

scores = [0, 0];
roundScore = 0;
activeGambler = 0;



document.querySelector('.craps').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-toss').addEventListener('click', function() {
    
    var craps = Math.floor(Math.random() * 6) + 1;
    var crapsDom = document.querySelector('.craps');
    crapsDom.style.display = 'block';
    crapsDom.src = './imgs/dice-' + craps + '.png';
    
    if (craps !== 1) {
        roundScore += craps;
        document.querySelector(`#current-${activeGambler}`).textContent = roundScore;
    } else{
        activeGambler === 0 ? activeGambler = 1 : activeGambler = 0;
    }

});


