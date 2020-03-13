
$(document).ready(function () {
    $("#slider").hide();
    $("#foto1").hide();
    $("#foto2").hide();
    $("#foto3").hide();

    $('#e').click(function () {
        $("#s-s").fadeOut(2000);
        $("#m").fadeOut(4000);
        $("#juvenil").fadeOut(6000);
    });

    $('#empe').click(function () {
        $("#slider").show();
        $("#slider div:gt(0)").hide();
        setInterval(function () {
            $("#slider div:first-child").fadeOut(1)
                .next("div").fadeIn(1000)
                .end().appendTo("#slider");
        }, 3000);
    });
    
    $('#mostrar').click(function () {
        $('#otro').show();
    });
    $('#ocultar').click(function () {
        $('#otro').hide();
    });
    $('#mostrar1').click(function () {
        $('#foto1').show();
    });
    $('#ocultar1').click(function () {
        $('#foto1').hide();
    });
    $('#mostrar2').click(function () {
        $('#foto2').show();
    });
    $('#ocultar2').click(function () {
        $('#foto2').hide();
    });
    $('#mostrar3').click(function () {
        $('#foto3').show();
    });
    $('#ocultar3').click(function () {
        $('#foto3').hide();
    });
    $('#carga1').click(function () {
        var esperar = 2000;
        $.ajax({
            url: "contenido.html",
            beforeSend: function () {
                $('.conte1').text('Cargando...');
            },
            success: function (data) {
                setTimeout(function () {
                    $('.conte1').html(data);
                }, esperar
                );
            }
        });
    });
    $('#carga2').click(function () {
        var esperar = 2000;
        $.ajax({
            url: "contenido2.html",
            beforeSend: function () {
                $('.conte2').text('Cargando...');
            },
            success: function (data) {
                setTimeout(function () {
                    $('.conte2').html(data);
                }, esperar
                );
            }
        });
    });
    $('#carga3').click(function () {
        var esperar = 2000;
        $.ajax({
            url: "contenido2.html",
            beforeSend: function () {
                $('.conte3').text('Cargando...');
            },
            success: function (data) {
                setTimeout(function () {
                    $('.conte3').html(data);
                }, esperar
                );
            }
        });
    });
 });

