var character = document.querySelector(".character");
var enemy = document.querySelector(".enemy");
var button = document.querySelector(".button");
var restart = document.querySelector(".restart");
var youDied = document.querySelector(".youDied");
var countedScore = document.querySelector(".score")
var counting = document.querySelector(".counting")
var countingTwo = document.querySelector(".countingTwo")

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
            youDied.style.display = "block";
            clearTimeout(scoreCounter);
        }
    },10)
    //interval to count the score and update it in HTML
    var scoreCounter = setInterval(function() {
        score ++;
        counting.innerHTML = `${score}`;
        countingTwo.innerHTML = `${score}`;
    //randomise enemy width
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        var random = getRandomArbitrary(20, 60);
        random = Math.round(random);
        console.log(random);
        enemy.style.width = `${random}`
              },1000)
}
//reset the website to reload animations and enemy place
function reset() {
    window.location.reload();
}

//speed up the enemies after time

//dark mode

//highscores in local storage

//

