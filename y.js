
var boss = document.getElementById('boss');
var bosshp = "100";
var playerhp = "100";
var randomx = 75 * Math.random() * Math.random();
var randomy = 75 * Math.random() * Math.random();
// var bosshpbar = document.getElementById('bosshpbar');
// var left = 0
// var timer = setInterval(() => {
//   if (left < 100) {
    // boss.style.left = `${left}px`
    // left++
//   } else {
    // clearTimeout(timer)
//   }
// }, 10);
function move(randomy) {
    boss.style.top = randomy + "%";
}

function move2(randomx){
    boss.style.left = randomx + "%";
}
function bosshealth(){
    bosshp = bosshp-10;
    // var healthbar = document.querySelector("#healthBar");
    // healthbar.style.width = bosshp + "%";

    if(bosshp < 1){
        alert("You defeated the Ultra Lethal Demon Overlord Teleportia!");
        console.log(playerhp)
        window.location.reload();
    }
}

function ghost(){
     boss.style.backgroundColor = "red";
    setTimeout(() =>{
        boss.style.opacity = "0";
    }, 1000);
    setTimeout( () =>{
        boss.style.opacity = "100%";
        bossattack();
        console.log("ghost?");
    }, 1000);
}

function bossattack(){
    boss.style.backgroundColor = "green";
    console.log("Boss just shot you!");
    playerhp = playerhp-2;
    // console.log(playerhp)

}
function bossmovement(){
    ghost()
    setTimeout( () =>{
        move(randomy);
        move2(randomx);
        randomy = 75 * Math.random();
        randomx = 75 * Math.random();
        bossmovement();
    }, 3000);
}

function shotonboss(){
    console.log("you shot the boss, holy cow");
    bosshealth();
    // console.log(bosshp);
    updatebosshealth();
    bossgothit();
}

function updatebosshealth(){
    var bosshpbar = document.getElementById('bosshpfiller');
    console.log("updating health");
    bosshpbar.style.height = bosshp + "%";
}
function start(){
    bossmovement()
}
function stop(){
    window.location.reload()
}
// updatebosshealth();
function bossgothit(){
    boss.style.opacity = "0";
    setTimeout(() =>{
        playerhp++;
        console.log("Updating health")
        boss.style.opacity = "100%"
    }, 2000)
}