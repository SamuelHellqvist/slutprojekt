var boss = document.getElementById('boss');
var bosshp = "100";
var playerhp = "100";
var randomx = 75 * Math.random() * Math.random();
var randomy = 75 * Math.random() * Math.random();

function move(randomy) {
    console.log("move?");
    randomy = 100 * Math.random();
    boss.style.top = randomy + "%";
}

function move2(randomx){
    randomx = 100 * Math.random();
    boss.style.left = randomx + "%";
}

function tp(){
    // boss.style.opacity = "0%";
    setTimeout(() => {
        boss.style.opacity = "100%";
        move();
        move2();
        setTimeout(() => {
            boss.style.opacity = "100%";
            playerhp = playerhp - "40";
            console.log(playerhp);
            boss.style.opacity = "0%"
            updateplayerhealth();
        }, 500);
        tp();
    }, 3000);
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
    if (playerhp < 10){
        alert("Game over!");
        window.location.reload();
    }
    if (playerhp > 100){
        playerhp = "100";
        updateplayerhealth();
    }
}

function bosstakedmg(){
    bosshp = bosshp - "20";
    updatebosshealth();
    boss.style.opacity = "0%";
    playerhp++;
    playerhp++;
    playerhp++;
    playerhp++;
    playerhp++;
    playerhp++;
    playerhp++;
    playerhp++;
    playerhp++;
    playerhp++;
    playerhp++;    
    updateplayerhealth();
    if (bosshp < 10){
        alert("Victory");
        window.location.reload();
    }
}

function movement(){
    setTimeout(() => {
        tp();
    }, 3500);
}

function stop(){
    window.location.reload();
}