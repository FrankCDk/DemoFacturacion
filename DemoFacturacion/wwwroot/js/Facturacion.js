$(document).ready(function () {
    console.log("Facturacion.js cargado");

    $('#exampleModal').on('show.bs.modal', function () {
        // Agrega la clase personalizada al backdrop
        $('.modal-backdrop').addClass('modal-backdrop-custom');
    });

    // Evento cuando el modal se oculta
    $('#exampleModal').on('hidden.bs.modal', function () {
        // Remueve la clase personalizada al backdrop
        $('.modal-backdrop').removeClass('modal-backdrop-custom');
    });

    $(".btn-click").on("click", function () {
        $('#exampleModal').modal('hide'); // Cierra el modal correctamente
    });


});
