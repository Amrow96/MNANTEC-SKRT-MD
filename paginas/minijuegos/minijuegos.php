<?php include './../../plantilla_base.php' ?>

<?php startblock('capcelera') ?>
<title>Sobre Nosaltres</title>
<?php endblock() ?>
<?php startblock('principal') ?>
<div class="container col-10 mt-5">
    <div class="card-deck mb-3 text-center">
        <!--#region Joc de Emissió -->

        <div class="card">
            <div class="card-header">
                <img class="card-img-top" src="./PRO-Memory/media/miniatura_juego.png" alt="Card image" style="width:100%">
            </div>
            <div class="card-body">
                <h2 class="titol">Emissió</h2>
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="contingut">Joc de memòria. <br>
                        Podrás aconseguir tots <br>
                        els elements la radio?</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onclick="location.href='./PRO-Memory/index.html'">A jugar!</button>
            </div>

        </div>
        <!-- #endregion -->
        <!-- #region Joc de Transmissió -->
        <div class="card mb-4">
            <div class="card-header">
                <img class="card-img-top" src="./Flappy-Bird/media/transmision.PNG" alt="Card image" style="width:100%">
            </div>
            <div class="card-body">
                <h2 class="titol">Transmissió</h2>
                <!-- <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1> -->
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="contingut">Joc d'habilitat. <br>
                        A quanta gent podrás <br>
                        transmetre el teu missatge?</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onclick="location.href='./Flappy-Bird/flappy.html'">A jugar!</button>
            </div>
        </div>
        <!-- #endregion -->
        <!-- #region Joc de Recepció -->
        <div class="card mb-4">
            <div class="card-header">
                <img class="card-img-top" src="../minijuegos/Prueba_juego/img/miniatura.png" alt="Card image" style="width:100%">
            </div>
            <div class="card-body">
                <h2 class="titol">Recepció</h2>
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="contingut">Joc de memòria. <br>
                        Podrás conectar tots <br>
                        els elements?</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary" onclick="location.href='./Prueba_juego/index.php'">A jugar!</button>
            </div>
            <!-- #endregion -->
        </div>
    </div>

    <?php endblock() ?>