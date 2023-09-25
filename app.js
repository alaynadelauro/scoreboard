let homeScore=0
let awayScore=0



function addOneHome(){
    // console.log('adding 1')
    homeScore += 1
    console.log('adding 1 to homeScore', homeScore);
    const homeScoreElm = document.getElementById('homeScore')
    homeScoreElm.innerText = homeScore
}


function addThreeHome(){
    homeScore += 3
    console.log('add 3 to homeScore', homeScore);
    homeScoreElm = document.getElementById('homeScore')
    homeScoreElm.innerText = homeScore
}

function addOneAway(){
    awayScore += 1
    console.log('add 1 to awayScore', awayScore);
    const awayScoreElm = document.getElementById('awayScore')
    awayScoreElm.innerText = awayScore
}
function addThreeAway(){
    awayScore += 3
    console.log('add 3 to awayScore', awayScore);
    awayScoreElm = document.getElementById('awayScore')
    awayScoreElm.innerText = awayScore
}

function resetPoints(){
    awayScore = 0
    homeScore = 0
    console.log('no points for you', homeScore + awayScore)
    homeScoreElm = document.getElementById('homeScore')
    awayScoreElm = document.getElementById('awayScore')
    awayScoreElm.innerText = awayScore
    homeScoreElm.innerText = homeScore
}
// The below code was my attempt to get the alert that tells you which game wins. I went ahead and did my best then turned to look for a TA to tell me what I could've done better but you were all gone

function homeWins(){
    if(homeScore >= 15){
        console.log('Home Wins!!!')
        window.alert('Away Team Sucks!!!')
        homeScoreElm = document.getElementById('homeScore')
        homeScoreElm.innerText = homeScore
    } else{
        console.log('not yet')
        window.alert("Don't count your chickens before they hatch!")
    }
}
function awayWins(){
    if(awayScore >= 15){
        console.log('Away Wins!!!')
        window.alert('Home Team Sucks!!!')
        awayScoreElm=document.getElementById('awayScore')
        awayScoreElm.innerText=awayScore
    } else{
        console.log('Nope')
        window.alert('Think Again')
    }
}
