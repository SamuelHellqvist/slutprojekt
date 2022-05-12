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
<?php
    $sql="SELECT * FROM tbl_players";
    $result=mysqli_query($conn,$sql);
?>
<body>
    <!--
    <div class="reklam">
        <h1>Kajsa letar efter trevliga kompisar att dricka kaffe med</h1>
        <a href="https://www.dinmamma.se/">Klicka här för att chatta med henne</a>
        <p>provided by Swedish Fika Kamrater ltd.</p>
    </div>-->
    <iframe frameborder="0" src="https://itch.io/embed/1462357" width="230" height="100">
        <a href="https://novcat-studios.itch.io/cats-trife%22%3ECats" Trife: Beasts of Pestilence by NovCat</a>
    </iframe>
    <div id="boss">
        <h1>Are you ready for a boss fight?</h1>
        <a href="boss.php">Enter the boss room</a>
    </div>
    <form method="post" action="index.php">
        <input type="text" name="nick" id="nickname"placeholder="nickname">
        <input type="submit" name="btn" value="save" id="submitbtn" onlclick="showstart()">
    </form>

    </div>
    <div id="gameframe">
        <div id="score">SCORE: </div>
        <div id="pointsindi"><h1>0</h1></div>
        <div id="healthBar"></div>

        <div id="locationtxt">
        <h1>Location:</h1>
        <h1 id="indi">ITALY</h1>
        </div>

        <div class="enemy" id="enemy1" id="foes" onclick="iShoot(this)">
            <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat" id="hat1">
                <div class="board" id="board1"></div>
            </div>
            <div class="jacket" id="jacket1">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns1">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

        <div class="enemy" id="enemy2" id="foes" onclick="iShoot(this)">
            <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat" id="hat2">
                <div class="board" id="board2">
                </div>
            </div>
            <div class="jacket" id="jacket2">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns2">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

        <div class="enemy" id="enemy3" id="foes" onclick="iShoot(this)">
            <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat" id="hat3">
                <div class="board" id="board3">
                </div>
            </div>
            <div class="jacket" id="jacket3">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns3">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

        <div class="enemy" id="enemy4" id="foes" onclick="iShoot(this)">
        <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat" id="hat4">
                <div class="board" id="board4">
                </div>
            </div>
            <div class="jacket" id="jacket4">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns4">
                <div class="line"></div>
                <div class="pipe" id="pipes"></div>
            </div>
        </div>

        <div class="enemy" id="enemy5" id="foes" onclick="iShoot(this)">
        <div class="lefteye" id="eyes"></div>
            <div class="righteye" id="eyes"></div>
            <div class="hat" id="hat5">
                <div class="board" id="board5">
                </div>
            </div>
            <div class="jacket" id="jacket5">
                <div class="zipper"></div>
            </div>
            <div class="shoes"></div>
            <div class="gun" id="guns5" class="thisclass">
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
        <div id="nickholder">
    
        <div class="list">
         <?php while($row=mysqli_fetch_assoc($result)){ ?>
            <div>
                <h1><span><?=$row['tag']?></span></h1>
            </div>
        <?php } ?>
        </div>
        
        </div>
    </div>
    <script src='script.js'></script>
</body>
</html>
