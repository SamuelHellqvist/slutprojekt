
var boss = document.getElementById('boss');
var bosshp = "100";
var playerhp = "100";
var randomx = 75 * Math.random() * Math.random();
var randomy = 75 * Math.random() * Math.random();
var flag = "0";
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
    if(bosshp < 1){
        alert("You defeated the Ultra Lethal Demon Overlord Teleportia!");
        console.log(playerhp);
        window.location.reload();
    }
}

function updatebosshealth(){
    var bosshpbar = document.getElementById('bosshpfiller');
    console.log("updating health");
    bosshpbar.style.height = bosshp + "%";
}

function updateplayerhealth(){
    var playerhpbar = document.getElementById('playerhpfiller');
    console.log("updating health");
    playerhpbar.style.height = playerhp + "%";
}

function shotonboss(){
    // healplayerhp();
    flag--;
    flag--;
    tp();
    console.log("you shot the boss, holy cow");
    bosshealth();
    updatebosshealth();
    console.log(flag);
    // playerhp = playerhp+5;
    // if (flag = "0"){
        // flag++;
    // }
}

function tp(){
    boss.style.opacity = "0";
    var randomx = 100 * Math.random();
    var randomy = 100 * Math.random();
    console.log("TELEPORT");
    setTimeout(() => {
        move(randomy);
        move2(randomx);
        boss.style.opacity = "100%";
    }, 3000);
    console.log("flag = ", flag);
}

function bossattack(){
    console.log("Boss just shot you!");
    playerhp = playerhp-10;
    // bossshooting();
    console.log(playerhp);
    updateplayerhealth();
    if (playerhp < 1){
        alert("You died!");
        window.location.reload();
    }
    // console.log(playerhp);

}
function bossmovement(){
    // boss.style.backgroundColor = "red";
    // var randomx = 100 * Math.random();
    // var randomy = 100 * Math.random();
    if (flag == 1){
        tp();
        // setTimeout( () =>{
            
        //     move(randomy);
        //     move2(randomx);
        //     bossattack();
        //     bossmovement();
        // }, 500);
        bossattack();
        tp();
    }
    if (flag == 0){
        console.log("trying my best");
        boss.style.opacity = "0";
        bossmovement;
        setTimeout( () =>{
            console.log("IT WILL RETURN");
            start();
        }, 500);
    }
}

function start(){
    boss.style.opacity = "100%"
    flag++;
    console.log(flag);
    battlestart();
}

function stop(){
    console.log("stop");
    window.location.reload();
}

function battlestart(){
    if (flag == 1){
        bossmovement();
    }
    if (flag == 0){
        console.log("Boss will not move");
    }
}