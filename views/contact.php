<section id="contato" class="frame">
    <div class="overlay"></div>
    <div style="position: relative; height: 100%;">
        <div class="holder" style="width: 30%; right: 0;">
            <div class="divider"></div>
            <div class="section-title">
                <p>CON</p>
                <p>TA</p>
                <p>TO</p>
            </div>
        </div>
        <div class="holder" style="width: 70%; left: 0;">
            <div style="height: 100%; display: flex;">
                <div class="form">
                    <form name="contact-form" method="post" action="send-mail.php">
                        <input type="text" placeholder="Nome" name="nome"></input>
                        <input type="text" placeholder="E-mail" name="email"></input>
                        <input type="text" placeholder="Assunto" name="assunto"></input>
                        <textarea placeholder="Mensagem" name="mensagem" style="max-height:260px; min-height:55px;"></textarea>
                        <input id="submit-contact" type="submit" value="Enviar"></input>
                    </form>
                </div>
                <div class="info">
                    <div>
                        <div class="text">Unidade Parque Tecnológico - Avenida Cesare Mansueto Giulio Lattes, n° 1201 - Eugênio de Mello, CEP: 12247-014</div>
                        <!--<div class="text">(TELEFONE)</div>-->
                        <div class="text">contato@ectmjr.com.br</div>
                        <div class="text">facebook.com/ectmjr</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="ui custom popup top left transition hidden">
    Email enviado
</div>