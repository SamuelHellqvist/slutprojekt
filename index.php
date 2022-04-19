<!DOCTYPE html>
<?php
    $dbserver="localhost";
    $dbuser="root";
    $dbpass="";
    $dbname="candy";
    $conn=mysqli_connect($dbserver, $dbuser, $dbpass, $dbname);
    
    if (isset($_POST['btn'])){
            $tag=$_POST['nick'];
            $sql="INSERT INTO tbl_players (tag) VALUES ('$tag')";
            mysqli_query($conn, $sql);
    }
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shoot the bandits</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <form method="post" action="index.php">
        <input type="text" name="nick" id="nickname"placeholder="nickname">
        <input type="submit" name="btn" value="save" id="submitbtn" onlclick="showstart()">
    </form>

    <button onclick="showstart()">testa</button>
    </div>
    <div id="gameframe">
        <div id="healthBar"></div>

        <div id="locationtxt">
        <h1>Location:</h1>
        <h1 id="indi">ITALY</h1>
        </div>

        <div class="enemy" id="enemy1" onclick="iShoot(this)">
            <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat">
                <div class="board"></div>
            </div>
            <div class="jacket" id="jacket">
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
            <div class="jacket" id="jacket">
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
            <div class="jacket" id="jacket">
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
            <div class="jacket" id="jacket">
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
            <div class="jacket" id="jacket">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

    </div>

    <button onclick="randomEnemyAttacks(), showstart()" id="startbtn" class="jump">START GAME</button>
    <button id="choosemapbtn" onclick="x()">CHANGE LOCATION</button>
    <button id="choosemapbtn2" onclick="y()">CHANGE LOCATION</button>
    <div id="highscores">
        <div id="header"><h1>Leaderboard</h1></div>
    </div>
    <script src='script.js'></script>
</body>
</html>