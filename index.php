<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shoot the bandits</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="gameframe">
        <div id="healthBar"></div>

        <div class="enemy" id="enemy1" onclick="iShoot(this)">
            <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat">
                <div class="board"></div>
            </div>
            <div class="jacket">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

        <div class="enemy" id="enemy2" onclick="iShoot(this)">
        <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat">
                <div class="board">
                </div>
            </div>
            <div class="jacket">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

        <div class="enemy" id="enemy3" onclick="iShoot(this)">
            <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat">
                <div class="board">
                </div>
            </div>
            <div class="jacket">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

        <div class="enemy" id="enemy4" onclick="iShoot(this)">
        <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat">
                <div class="board">
                </div>
            </div>
            <div class="jacket">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

        <div class="enemy" id="enemy5" onclick="iShoot(this)">
        <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat">
                <div class="board">
                </div>
            </div>
            <div class="jacket">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

    </div>

    <button onclick="randomEnemyAttacks()" id="startbtn">START GAME</button>
    <div id="highscores">
        <div id="header"><h1>Leaderboard</h1></div>
    </div>
    <script src='script.js'></script>
</body>
</html>