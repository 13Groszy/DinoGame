var character = document.querySelector(".character");
var enemy = document.querySelector(".enemy");

function jump(){
    if(character.classList !="animation"){
        character.classList.add('animation');
    }
    setTimeout(function(){
        character.classList.remove('animation');
    },500);
}
function play(){
    setTimeout(function(){
        enemy.classList.add('play');
    },500)
}

var gameOver = setInterval(function(){
    var characterPos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var enemyPos = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));

    if(enemyPos<25 && enemyPos>0 && characterPos>=225){
        enemy.style.animation = "none";
        enemy.style.display = "none";
        console.log("you died")
    }
},10)