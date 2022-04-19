function test(){
    console.log("Never gonna give you up")
    console.log("Never gonna let you down")
    console.log("Never gonna run around and desert you")
    console.log("Never gonna make you cry")
    console.log("Never gonna say goodbye")
    console.log("Never gonna tell a lie and hurt you")
}
var enemy = document.querySelectorAll(".enemy");

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
    console.log(" random enemy about to attack!");
	var randomEnemyNo = Math.random() * livingEnemies().length;
	randomEnemyNo = Math.floor(randomEnemyNo);
	var enemy = livingEnemies()[randomEnemyNo];

	var randomDelay = Math.random() * 2000 + 1000;

	setTimeout( ()=> {
		enemyAttacksMe(enemy);
		randomEnemyAttacks();
	}, randomDelay);


}

function z(){
    enemy.style.left = "-100%";
}

var hush = 1;

function showstart(){
    console.log("Testing");
    var startbtn = document.querySelector("#startbtn");
    var mapbtn = document.querySelector("#choosemapbtn");
    var mapbtn2 = document.querySelector("#choosemapbtn2");
    var hpbar = document.querySelector("#healthBar");
    var location = document.querySelector("#locationtxt");
    /*startbtn.style.opacity = "0";*/
    startbtn.style.left = "-100%";
    mapbtn.style.left = "-100%";
    mapbtn2.style.left = "-100%";
    hpbar.style.opacity = "100%";
    location.style.top = "5%";

    var gameframe = document.querySelector("#gameframe");
    if (hush == 1){
        gameframe.style.backgroundImage= "url('https://www.itl.cat/pngfile/big/208-2085186_italy-sicily.jpg')";
    }
    if (hush == 2){
        gameframe.style.backgroundImage= "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kibo_PM_interior.jpg/1200px-Kibo_PM_interior.jpg')";
        z();
    }
}

function x(){
    hush++;
    console.log(hush);
    console.log("Location changing...");
    var indi = document.querySelector("#indi");
    indi.innerHTML = "ISS";

    var btnA = document.querySelector("#choosemapbtn");
    btnA.style.left = "-100%";

    var btnB = document.querySelector("#choosemapbtn2");
    btnB.style.left = "19%";
}

function y(){
    hush--;
    console.log(hush);
    console.log("Location changing...");
    var indi = document.querySelector("#indi");
    indi.innerHTML = "ITALY";

    var btnA = document.querySelector("#choosemapbtn");
    btnA.style.left = "19%";

    var btnB = document.querySelector("#choosemapbtn2");
    btnB.style.left = "-100%";
}

var enemy1 = document.querySelector("#enemy1");
var enemy2 = document.querySelector("#enemy2");
var enemy3 = document.querySelector("#enemy3");
var enemy4 = document.querySelector("#enemy4");
var enemy5 = document.querySelector("#enemy5");
test();

z();