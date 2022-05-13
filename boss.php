<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="bossstyle.css">
</head>
<body>
    <div id="gameframe">
        <div id="boss" class="jel" onclick="bosstakedmg()">
            <div id="eye"></div>
        </div>
        <button onclick="tp()">START</button>
        <button onclick="stop()">STOP</button>
    </div>

    <div id="bosstext">ENEMY HP</div>
    <div id="bosshpbar">
        <div id="bosshpfiller"></div>
    </div>

    <div id="playertext">YOUR HP</div>
    <div id="playerhpbar">
        <div id="playerhpfiller"></div>
    </div>

    <div id="goback"><a href="index.php">Go back to the homescreen</a></div>
    <script  src='x.js' ></script>
</body>
</html>