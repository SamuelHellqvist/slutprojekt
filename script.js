function test(){
    console.log("Never gonna give you up");
    console.log("Never gonna let you down");
    console.log("Never gonna run around and desert you");
    console.log("Never gonna make you cry");
    console.log("Never gonna say goodbye");
    console.log("Never gonna tell a lie and hurt you");
    console.log(enemy);
}
var enemy = document.querySelectorAll(".enemy");

var timea = 0;

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

var pointsindi = document.querySelector('#pointsindi');
var points = (healthPoints*100) / livingEnemies().length;
var newpoints = points.round()
    setTimeout( ()=> {
        timea++;
        console.log(newpoints);
        // showpoints(pointsindi);
        pointsindi.innerHTML = points;
        {
        }
    }, 1000)

	var randomDelay = Math.random() * 2000 + 1000;

	setTimeout( ()=> {
		enemyAttacksMe(enemy);
		randomEnemyAttacks();
	}, randomDelay);


}

var hush = 1;

function aliens(enemy){
    enemy.classList.add("green");
    console.log("hello world!")
}

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
        enemy1.style.backgroundColor = "#ccff8c";
        enemy2.style.backgroundColor = "#ccff8c";
        enemy3.style.backgroundColor = "#ccff8c";
        enemy4.style.backgroundColor = "#ccff8c";
        enemy5.style.backgroundColor = "#ccff8c";
        hat1.style.backgroundColor = "white";
        hat2.style.backgroundColor = "white";
        hat3.style.backgroundColor = "white";
        hat4.style.backgroundColor = "white";
        hat5.style.backgroundColor = "white";
        jacket1.style.backgroundColor = "#ba9ce4";
        jacket2.style.backgroundColor = "#ba9ce4";
        jacket3.style.backgroundColor = "#ba9ce4";
        jacket4.style.backgroundColor = "#ba9ce4";
        jacket5.style.backgroundColor = "#ba9ce4";
        guns1.style.backgroundColor = "silver";
        guns2.style.backgroundColor = "silver";
        guns3.style.backgroundColor = "silver";
        guns4.style.backgroundColor = "silver";
        guns5.style.backgroundColor = "silver";
        board1.style.backgroundColor = "silver";
        board2.style.backgroundColor = "silver";
        board3.style.backgroundColor = "silver";
        board4.style.backgroundColor = "silver";
        board5.style.backgroundColor = "silver";
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
var hat1 = document.querySelector("#hat1");
var hat2 = document.querySelector("#hat2");
var hat3 = document.querySelector("#hat3");
var hat4 = document.querySelector("#hat4");
var hat5 = document.querySelector("#hat5");
var jacket1 = document.querySelector("#jacket1");
var jacket2 = document.querySelector("#jacket2");
var jacket3 = document.querySelector("#jacket3");
var jacket4 = document.querySelector("#jacket4");
var jacket5 = document.querySelector("#jacket5");
var guns1 = document.querySelector("#guns1");
var guns2 = document.querySelector("#guns2");
var guns3 = document.querySelector("#guns3");
var guns4 = document.querySelector("#guns4");
var guns5 = document.querySelector("#guns5");
var board1 = document.querySelector("#board1");
var board2 = document.querySelector("#board2");
var board3 = document.querySelector("#board3");
var board4 = document.querySelector("#board4");
var board5 = document.querySelector("#board5");

var points = timea * healthPoints;
var pointsindi = document.querySelector('#pointsindi');

function showpoints(pointsindi){
    pointsindi.innerHTML = points;
}
test();