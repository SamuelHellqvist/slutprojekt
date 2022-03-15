var timea = 3000;

var healthPoints = 100;

function updateHealthPoints(points){
    healthPoints = points;
    var healthbar = document.querySelector("#healthBar");
    healthbar.style.width = points + "%";

    if(healthPoints < 1){
        alert("Game over!");
        window.location.reload();
    }

}

function iShoot(enemy){
    enemy.classList.add("dead");
    console.log("enemy got shot");

    if(!livingEnemies().length){
        alert("You win!");
        window.location.reload();
    }
}

function enemyAttacksMe(enemy){
    enemy.classList.add("showing");
    setTimeout( ()=>{
        enemyShootsMe(enemy);
    }, 1000);
    setTimeout( ()=> {
        enemy.classList.remove("showing");
    }, 3000);
}

function enemyShootsMe(enemy){
    if(!enemy.classList.contains("dead")){
        enemy.classList.add("shooting");
        updateHealthPoints(healthPoints-20);
        
        setTimeout( ()=>{
            enemy.classList.remove("shooting");
        }, 200)
    }
}

function livingEnemies(){
    return document.querySelectorAll(".enemy:not(.dead)");
}

function randomEnemyAttacks() {
    console.log("enemy about to attack!")
	var randomEnemyNo = Math.random() * livingEnemies().length;
	randomEnemyNo = Math.floor(randomEnemyNo);
	var enemy = livingEnemies()[randomEnemyNo];

	var randomDelay = Math.random() * 2000 + 1000;

	setTimeout( ()=> {
		enemyAttacksMe(enemy);
		randomEnemyAttacks();
	}, randomDelay);

}

var enemy1 = document.querySelector("#enemy1");
var enemy2 = document.querySelector("#enemy2");
var enemy3 = document.querySelector("#enemy3");
var enemy4 = document.querySelector("#enemy4");
var enemy5 = document.querySelector("#enemy5");