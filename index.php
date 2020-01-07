<?php include './plantilla_base.php' ?>

<?php startblock('capcelera') ?>
<title>La historia de la Radio</title>
<?php endblock() ?>
<?php startblock('principal') ?>

<div class="container mt-5">
    <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
            <div class="card-header">
                <img class="card-img-top" src="./paginas/Prueba_map(4k)/recursos/miniatura.png" alt="Card image" style="width:100%">
            </div>
            <div class="card-body">
                <!-- TODO: carregar els textos desde variables per fer-ho multilingue -->
                <h2 class="my-0 font-weight-normal">Mapa de la Radio</h2>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Puedes escuchar </li>
                    <li>algunas de las emisoras </li>
                    <li>de todo el mundo!</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onclick="location.href='./paginas/Prueba_map(4k)/index.html'">Ir al mapa!</button>
            </div>
        </div>
        <div class="card mb-4 box-shadow">
            <div class="card-header">
                <img class="card-img-top" src="./img/minigames.png" alt="Card image" style="width:100%">

            </div>
            <div class="card-body">
                <h2 class="my-0 font-weight-normal">Minijuegos</h2>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Emisión</li>
                    <li>Transmisión</li>
                    <li>Recepción</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onclick="location.href='./paginas/minijuegos/minijuegos.html'">A jugar!</button>
            </div>
        </div>
        <div class="card mb-4 box-shadow">
            <div class="card-header">
                <img class="card-img-top" src="./img/radio.png" alt="Card image" style="width:100%">
            </div>
            <div class="card-body">
                <h2 class="my-0 font-weight-normal">Información</h2>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onclick="location.href='./paginas/presentacion/presentacion.html'">Aprende!</button>
            </div>
        </div>
    </div>


</div>

<?php endblock() ?>