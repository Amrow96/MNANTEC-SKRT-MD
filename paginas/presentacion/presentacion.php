<?php include './../../plantilla_base.php' ?>

<?php startblock('capcelera') ?>
<link href="./css/miCSS.css" rel="stylesheet" />
<title>Presentació Interactiva</title>
<?php endblock() ?>
<?php startblock('principal') ?>
<div class="slideshow-container">
    <div class="mySlides">
        <img src="./img/emisio.png" style="width:100%" />
    </div>
    <div class="mySlides">
        <img src="./img/recepcio.png" style="width:100%" />
    </div>
    <div class="mySlides">
        <img src="./img/all0.png" style="width:100%" />
    </div>
    <div class="mySlides">
        <img src="./img/all1.png" style="width:100%" />
    </div>
    <div class="mySlides">
        <img src="./img/all2.png" style="width:100%" />
    </div>
    <div class="mySlides">
        <img src="./img/all3.png" style="width:100%" />
    </div>
    <div class="mySlides">
        <img src="./img/all4.png" style="width:100%" />
    </div>
    <div class="mySlides">
        <img src="./img/all5.png" style="width:100%" />
    </div>
    <div class="mySlides">
        <img src="./img/all6.png" style="width:100%" />
    </div>
    <div class="mySlides">
        <img src="./img/all7.png" style="width:100%" />
    </div>

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br />

<script src="js/presentacion.js"></script>