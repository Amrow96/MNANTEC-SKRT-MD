<?php require_once './resources/ti.php' ?>
<html>

<head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="./css/micss.css" rel="stylesheet">
    <?php startblock('capcelera') ?>
    <?php endblock() ?>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h5 class="mr-auto ml-3 titol">Museu MNACTEC</h5>
        <!-- TODO posar els inputs de tipus botó i fer que el fondo sigui la imatge
        <div class="text-center">
            <input type="image" src="./img/espana.png" />
            <input type="image" src="./img/english.png" onclick="location.href='./paginas/index.en.html'" />
            <input type="image" src="./img/catalan.png" onclick="location.href='./paginas/index.cat.html'" />
        </div>-->
        <div class="mt-3 mb-3">
            <a class="btn btn-primary mr-3 titol right" href="./paginas/about/aboutus.html">Qui Som?</a>
        </div>
    </nav>
    <?php startblock('principal') ?>
    <?php endblock() ?>
</body>

</html>