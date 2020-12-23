var isValid = false


//input vars
var input_name = '';
var input_surname = '';
var input_dob = '';
var input_phone = '';
var input_docType = '';
var input_docNumber = '';


function submitData() {

    $('#loader_form').css("display", "block")

    axios.post('http://67.205.171.20/admin-dashboard/public/api/create', {
        input_name: input_name,
        input_surname: input_surname,
        input_dob: input_dob,
        input_phone: input_phone,
        input_docType: input_docType,
        input_docNumber: input_docNumber
    })
        .then(function (response) {
            console.log(response.status);

            var status = response.status

            if (status === 200) {
                $('#loader_form').css("display", "none")
                Swal.fire({
                    icon: 'success',
                    title: 'Dados Enviados com sucesso',
                    text: 'Os seus dados foram enviados com sucesso!',
                })
            }else if (status === 409) {
                Swal.fire({
                    icon: 'info',
                    title: 'Duplicação de dados',
                    text: 'Os seus dados ja foram registados na plataforma!',
                })
            }


        })
        .catch(function (error) {
            console.log(error);
            $('#loader_form').css("display", "none")
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Por favor verifique sua conexão a internet ou as suas definições de firewall!',
            })
        });
}


function customValidations() {
    var phone = $('#field_input_phone').val()

    var phoneValidation = false
    var dateBirthValidation = false

    if (phone !== '') {
        if (phone.substring(0, 2) === '84') {
            if (phone.length !== 9) {
                $('#error_phone').css("display", "block")
                $('#error_phone').text('Número de celular invalido')
                phoneValidation = false
            } else {
                phoneValidation = true
            }
        } else {
            $('#error_phone').css("display", "block")
            $('#error_phone').text('Apenas são permitidos números de telefone da operadora Vodacom')
            phoneValidation = false
        }

    }

    var dateBirth = new Date($('#field_input_dob').val());
    if (dateBirth !== '') {
        var today = new Date();
        if (today.getFullYear() - dateBirth.getFullYear() < 16) {
            $('#error_dob').css("display", "block")
            $('#error_dob').text('A idade do cliente não pode ser inferior a 16 anos')
            dateBirthValidation = false
        } else {
            dateBirthValidation = true
        }

    }
    console.log('phone v' + phoneValidation)
    console.log('dob v' + dateBirthValidation)
    return phoneValidation && dateBirthValidation;

}

/*  Wizard */
jQuery(function ($) {
    "use strict";
    $(document).ready(function () {
        $("#field_input_dob").focus(function () {
            $("#error_dob").css("display", "none")
        });

        $("#field_input_phone").focus(function () {
            $("#error_phone").css("display", "none")
        });
    });


    $('form#wrapped').attr('action', function () {
        //	alert('Enviando');
    });
    $("#wizard_container").wizard({
        stepsWrapper: "#wrapped",
        submit: ".submit",
        beforeSelect: function (event, state) {

            if ($('input#website').val().length != 0) {

                return false;
            }
            if (!state.isMovingForward) {

                return true;
            }

            var inputs = $(this).wizard('state').step.find(':input');
            // alert('Validacao v '+ !!inputs.valid())
            // alert('Validacao tama '+ !inputs.length)
            isValid = customValidations();
            console.log('is valid ' + isValid)
            return !inputs.length || !!inputs.valid() && isValid;
        }
    }).validate({
        errorPlacement: function (error, element) {
            if (element.is(':radio') || element.is(':checkbox')) {
                error.insertBefore(element.next());
            } else {
                error.insertAfter(element);
            }
        }
    });
    //  progress bar
    $("#progressbar").progressbar();
    $("#wizard_container").wizard({
        afterSelect: function (event, state) {
            $("#progressbar").progressbar("value", state.percentComplete);
            $("#location").text("(" + state.stepsComplete + "/" + state.stepsPossible + ")");
        }
    });
    // Validate select
    $('#wrapped').validate({
        ignore: [],
        rules: {
            select: {
                required: true
            }
        },
        errorPlacement: function (error, element) {
            if (element.is('select:hidden')) {
                error.insertAfter(element.next('.nice-select'));
            } else {
                error.insertAfter(element);
            }
        }
    });
});

// Summary
function getVals(formControl, controlType) {
    switch (controlType) {

        case 'input_name':
            // Get the value for a input text
            var value = $(formControl).val();
            input_name = value;
            $("#input_name").text(value);
            break;

        case 'input_surname':
            // Get the value for a input text
            var value = $(formControl).val();
            input_surname = value;
            $("#input_surname").text(value);
            break;

        case 'input_dob':
            // Get the value for a input text
            var value = $(formControl).val();
            input_dob = value;
            $("#input_dob").text(value);
            break;

        case 'input_phone':
            // Get the value for a select
            var value = $(formControl).val();
            input_phone = value;
            $("#input_phone").text(value);
            break;

        case 'input_docType':
            // Get the value for a input text
            var value = $(formControl).val();
            input_docType = value;
            $("#input_docType").text(value);
            break;

        case 'input_docNumber':
            // Get the value for a input text
            var value = $(formControl).val();
            input_docNumber = value;
            $("#input_docNumber").text(value);
            break;
    }
}