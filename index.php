<?php include './plantilla_base.php' ?>

<?php startblock('capcelera') ?>
<title>La historia de la Radio</title>
<?php endblock() ?>
<?php startblock('principal') ?>

<div class="container mt-5 col-10">
    <div class="card-deck mb-3 text-center">
        <!-- Mapa de la Radio -->
        <div class="card mb-4">
            <div class="card-header">
                <img class="card-img-top" src="./paginas/Prueba_map(4k)/recursos/miniatura.png" alt="Card image" style="width:100%">
            </div>
            <div class="card-body">
                <!-- TODO: carregar els textos desde variables per fer-ho multilingue -->
                <h2 class="titol">Mapa de la Radio</h2>
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="contingut">Puedes escuchar </li>
                    <li class="contingut">algunas de las emisoras </li>
                    <li class="contingut">de todo el mundo!</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onclick="location.href='./paginas/Prueba_map(4k)/index.html'">Ir al mapa!</button>
            </div>
        </div>
        <!-- Minijocs -->
        <div class="card mb-4">
            <div class="card-header">
                <img class="card-img-top" src="./img/minigames.png" alt="Card image" style="width:100%">

            </div>
            <div class="card-body">
                <h2 class="titol">Minijuegos</h2>
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="contingut">Emisión</li>
                    <li class="contingut">Transmisión</li>
                    <li class="contingut">Recepción</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onclick="location.href='./paginas/minijuegos/minijuegos.php'">A jugar!</button>
            </div>
        </div>
        <!-- Presentació -->
        <div class="card mb-4">
            <div class="card-header">
                <img class="card-img-top" src="./img/radio.png" alt="Card image" style="width:100%">
            </div>
            <div class="card-body">
                <h2 class="titol">Información</h2>
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="contingut">30 users included</li>
                    <li class="contingut">15 GB of storage</li>
                    <li class="contingut">Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onclick="location.href='./paginas/presentacion/presentacion.html'">Aprende!</button>
            </div>
        </div>
    </div>
</div>

<?php endblock() ?>