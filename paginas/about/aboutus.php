<?php include './../../plantilla_base.php' ?>

<?php startblock('capcelera') ?>
<link href="../../css/micss.css" rel="stylesheet" />

<title>Sobre Nosaltres</title>
<?php endblock() ?>
<?php startblock('principal') ?>

<div class=" mt-4 text-center">
    <h5 class="contingut text-white">
        Som un grup d'estudiants del Centre D'estudis Politecnics<br />
        que estem cursant el grau superior de Desenvolupament d'Aplicacions Web.
    </h5>
</div>



<div class="container col-10">
    <div class="card-deck mb-3 text-center">
        <div id="carta" class="card">
            <img src="./img/pau.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="titol text-white">Pau Gonzalez</h5>
                <p class="contingut">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
            </div>
        </div>
        <div id="carta" class="card">
            <img src="./img/jorge.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="titol text-white">Jorge Sereno</h5>
                <p class="contingut">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                </p>
            </div>
        </div>
        <div id="carta" class="card">
            <img src="./img/edu.png" class="card-img-top" alt="Eduard Gomà" />
            <div class="card-body">
                <h5 class="titol text-white">Eduard Gomà</h5>
                <p class="contingut">
                    This is a as a to show that equal height action.
                </p>
            </div>
        </div>
    </div>
</div>

<?php endblock() ?>