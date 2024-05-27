$(document).ready(function() {
    // Evita el envío del formulario y realiza la validación
    $('#postulacionForm').on('submit', function(e) {
        e.preventDefault();  // Previene el envío automático para validar primero
        if (validarFormulario()) {
            this.submit();  // Envía el formulario si todas las validaciones son correctas
        }
    });

    // Evento clic para generar la carta
    $('#crearCarta').click(function() {
        if (validarFormulario()) {
            var cartaTexto = generarTextoCarta();
            $('#carta').val(cartaTexto);
            // Habilitar el botón de exportar PDF
            $('#exportarPdf').prop('disabled', false);
        } else {
            alert('Por favor, corrija los errores en el formulario antes de generar la carta.');
        }
    });

    // Evento clic para exportar la carta a PDF
    $('#exportarPdf').click(function() {
        if ($('#carta').val() !== '') {
            exportarAPdf($('#carta').val());
        } else {
            alert('Primero genere la carta antes de exportarla a PDF.');
        }
    });

    // Función para generar el texto de la carta
    function generarTextoCarta() {
        var genero = $('#genero').find(":selected").text();
        return "Estimados Master Bike\n\n" + 
               "Favor necesito de sus servicios. " +
               "Mi nombre es " + $('#nombre').val() + ", " +
               "El servicio que requiero contratar es: " +
               $('#servicio').val() + ".\n\n" +
               "Atentamente,\n" + 
               $('#nombre').val();
    }

    // Función para validar todos los campos del formulario
    function validarFormulario() {
        var valid = true;

        // Validación del RUT
        var rut = $('#rut').val();
        if (!validarRut(rut)) {
            alert('El RUT ingresado no es válido.');
            valid = false;
        }

        // Validación del nombre
        var nombre = $('#nombre').val();
        if (nombre.length < 3 || nombre.length > 20) {
            alert('El nombre debe tener entre 3 y 20 caracteres.');
            valid = false;
        }

        // Validación del apellido paterno
        var apellidoPaterno = $('#apellidoPaterno').val();
        if (apellidoPaterno.length < 3 || apellidoPaterno.length > 20) {
            alert('El apellido paterno debe tener entre 3 y 20 caracteres.');
            valid = false;
        }

        // Validación del apellido materno
        var apellidoMaterno = $('#apellidoMaterno').val();
        if (apellidoMaterno.length < 3 || apellidoMaterno.length > 20) {
            alert('El apellido materno debe tener entre 3 y 20 caracteres.');
            valid = false;
        }

        // Validación de la edad
        var edad = $('#edad').val();
        if (edad < 18 || edad > 35) {
            alert('La edad debe estar entre 18 y 35 años.');
            valid = false;
        }

        // Validación del género
        var genero = $('#genero').val();
        if (genero === "") {
            alert('Seleccione un género de la lista.');
            valid = false;
        }

        // Validación del celular
        var celular = $('#celular').val();
        if (celular.length < 9 || celular.length > 12) {
            alert('El celular debe tener entre 9 y 12 caracteres.');
            valid = false;
        }

        return valid;  // Retorna true si todas las validaciones son correctas
    }

    // Función para validar el RUT utilizando el algoritmo del módulo 11
    function validarRut(rut) {
        rut = rut.replace(/\./g, '').replace('-', '');
        var cuerpo = rut.slice(0, -1);
        var dv = rut.slice(-1).toUpperCase();
        
        if (cuerpo.length < 7) { return false; }
        
        var suma = 0;
        var multiplo = 2;
        
        for (var i = 1; i <= cuerpo.length; i++) {
            suma += multiplo * rut.charAt(cuerpo.length - i);
            multiplo = (multiplo < 7) ? multiplo + 1 : 2;
        }
        
        var dvEsperado = 11 - (suma % 11);
        dvEsperado = (dvEsperado == 11) ? '0' : (dvEsperado == 10) ? 'K' : dvEsperado.toString();
        
        return dv === dvEsperado;
    }

    // Función para exportar la carta a PDF
    function exportarAPdf(cartaTexto) {
        var element = document.getElementById('carta');
        html2pdf(element, {
            margin: 18,
            filename: 'CartaPresentacion.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });
    }
});
