var character = document.querySelector(".character");
var enemy = document.querySelector(".enemy");
var button = document.querySelector(".button");
var restart = document.querySelector(".restart");
var countedScore = document.querySelector(".score")
var counting = document.querySelector(".counting")
var score = -1;

//character jump function -> add jump by adding the class
function jump(){
    if(character.classList !="animation"){
        character.classList.add('animation');
    }
    setTimeout(function(){
        character.classList.remove('animation');
    },500);
}
function play(){
    //game start after 1 sec and the play button disappear
    setTimeout(function(){
        enemy.classList.add('play');
        button.style.display = "none";
        countedScore.style.display = "block";
    },1000)
    //Interval checking every 10ms does enemy hit the character,
    //Once hitted, enemy disappear and reset appear
    var gameOver = setInterval(function(){
        var characterPos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var enemyPos = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    
        if(enemyPos<25 && enemyPos>0 && characterPos>=225){
            enemy.style.animation = "none";
            enemy.style.display = "none";
            button.style.display = "none";
            restart.style.display = "block";
            clearTimeout(scoreCounter);
        }
    },10)
    //interval to count the score and update it in HTML
    var scoreCounter = setInterval(function() {
        score ++;
        counting.innerHTML = `${score}`;
        },1000)
}
//reset the website to reload animations and enemy place
function reset() {
    window.location.reload();
}


//randomise enemy distance

//speed up the enemies after time

//dark mode

//highscores in local storage

//

