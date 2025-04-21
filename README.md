<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Scrollable Tabs con Bootstrap 4.6</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
</head>

<body>

    <div style="padding: 1rem;">

        <h3>Consola de Cotizaciones</h3>

        <div class="row">

            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="cboAgencia">AGENCIA</label>
                    <select name="cboAgencia" id="cboAgencia" class="form-control form-control-sm">
                        <option value="">--SELECCIONE--</option>
                    </select>
                </div>
            </div>

            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="cboEstado">ESTADO</label>
                    <select name="cboEstado" id="cboEstado" class="form-control form-control-sm">
                        <option value="">--SELECCIONE--</option>
                    </select>
                </div>
            </div>

            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="txtFechaInicial">DESDE</label>
                    <input type="date" class="form-control form-control-sm" id="txtFechaInicial">
                </div>
            </div>

            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="txtFechaFinal">HASTA</label>
                    <input type="date" class="form-control form-control-sm" id="txtFechaFinal">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="txtClienteProspecto">CLIENTE/PROSPECTO</label>
                    <input type="text" class="form-control form-control-sm" id="txtClienteProspecto">
                </div>
            </div>

            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="txtNumero">NÚMERO</label>
                    <input type="text" class="form-control form-control-sm" id="txtNumero">
                </div>
            </div>

            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="txtVersion">VERSIÓN</label>
                    <input type="text" class="form-control form-control-sm" id="txtVersion">
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col-12">
                <button class="btn btn-primary">
                    BUSCAR
                </button>

                <button class="btn btn-success">
                    EXCEL
                </button>
            </div>

        </div>

    </div>

    <!-- Tabla -->
    <table class="table">
        <thead>
            <tr>
                <th scope="col">AGENCIA</th>
                <th scope="col">COTIZACIÓN</th>
                <th scope="col">CLIENTE/PROSPECTO</th>
                <th scope="col">MONEDA</th>
                <th scope="col">IMPORTE</th>
                <th scope="col">ESTADO</th>
                <th scope="col">ACCIONES</th>
            </tr>
        </thead>
        <tbody id="tbodyConsola">

        </tbody>
    </table>



    <!-- Modal para más filtros -->
    <!-- <div class="modal-dialog modal-dialog-centered">
        ...
    </div> -->

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossorigin="anonymous"></script>
    <script src="index.js"></script>

</body>

</html>


var List = [
    { cotizacion: "1", agencia: "0001", cliente: "Cliente 1", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "2", agencia: "0002", cliente: "Cliente 2", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "3", agencia: "0003", cliente: "Cliente 3", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "4", agencia: "0004", cliente: "Cliente 4", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "5", agencia: "0005", cliente: "Cliente 5", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "6", agencia: "0006", cliente: "Cliente 6", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "7", agencia: "0007", cliente: "Cliente 7", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "8", agencia: "0008", cliente: "Cliente 8", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "9", agencia: "0009", cliente: "Cliente 9", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "10", agencia: "0010", cliente: "Cliente 10", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "11", agencia: "0011", cliente: "Cliente 11", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "12", agencia: "0012", cliente: "Cliente 12", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "13", agencia: "0013", cliente: "Cliente 13", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "14", agencia: "0014", cliente: "Cliente 14", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "15", agencia: "0015", cliente: "Cliente 15", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "16", agencia: "0016", cliente: "Cliente 16", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "17", agencia: "0017", cliente: "Cliente 17", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "18", agencia: "0018", cliente: "Cliente 18", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "19", agencia: "0019", cliente: "Cliente 19", estado: "APROBADO", moneda: 'USD', importe: 200 },
    { cotizacion: "20", agencia: "0020", cliente: "Cliente 20", estado: "APROBADO", moneda: 'USD', importe: 200 }
];



$(document).ready(function () {

    //Aca va la validacion del permiso de cotización

    oConsolaCotizacion.Events.Init();

});


let total = 10;
var oConsolaCotizacion = {

    Events: {

        Init() {

            console.log('Esta es una prueba');
            oConsolaCotizacion.Events.ListarCotizaciones();

        },

        ListarCotizaciones() {

            //Aca hacemos la solicitud
            var object = new Object();


            //Aca iniciamos la paginacion
            if (List.length > 0) {

                oConsolaCotizacion.Paginacion.ListarCotizaciones();

            } else {

                $('#tbodyConsola').append(`
                    <tr>
                        <td colspan='5' class='text-center text-muted'>Sin registros</td>
                    </tr>
                    `)

            }


        },

        AprobarCotizacion() {


        },

        ComunicarCliente() {



        }


    },

    Paginacion: {

        ListarCotizaciones() {


            let html = ''
            for (let i = 0; i < List.length; i++) {

                html += "<tr>"
                html += `<td class='text-center'>${List[i].agencia}</td>`
                html += `<td class='text-center'>${List[i].cotizacion}</td>`
                html += `<td class='text-center'>${List[i].cliente}</td>`
                html += `<td class='text-center'>${List[i].moneda}</td>` //Moneda
                html += `<td class='text-center'>${List[i].importe}</td>` //Importe
                html += `<td class='text-center'>${List[i].estado}</td>`
                html += `<td class='text-center'>${List[i].agencia}</td>`
                html += "</tr>"
            }

            $('#tbodyConsola').append(html);

        }

    },

    Modal: {


    },

    Validaciones: {



    }







}


