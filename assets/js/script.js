
$(document).ready(function(){
    $("#enviarMensaje").click(function(){
        alert("¡El mensaje se ha enviado!");
    });
});

$(document).ready(function(){
    $("#quienes").on("click", function(){
        $(this).css({
            "text-decoration": "overline",
            "color": "white"
        });
    });

    $("#destacado").on("click", function(){
        $(this).css({
            "text-decoration": "overline",
            "color": "white"
        });
    });

    $("#contacto").on("click", function(){
        $(this).css({
            "text-decoration":"overline",
            "color":"white"
        })
    })
});
$(document).ready(function(){
    $(".card").hover(
        function() {
            $(this).addClass("highlight"); // Agregar la clase 'highlight' cuando el mouse entra en la tarjeta
        },
        function() {
            $(this).removeClass("highlight"); // Quitar la clase 'highlight' cuando el mouse sale de la tarjeta
        }
    );
});



