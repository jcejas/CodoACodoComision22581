function $(selector) {
    return document.querySelector(selector);
}

$('button[name="summary"]').addEventListener("click", function(){
    let quantity = $('input[name="quantity"]').value;
    let category = $('select[name="category"]').value;

    if (!validateData(quantity, category)) {
        $('#total').innerHTML = '';
        return;
    }

    console.log(typeof category, category);
    let percentage;
    switch (parseInt(category)) {
        case 1: //Estudiante 80%
            percentage = 0.8;
        break;
        case 2: //Trainee 50%
            percentage = 0.5;
        break;
        case 3: //Junior 15%
            percentage = 0.15;
        break;
        default:
            $('#total').innerHTML = '';
            alert('La categor\u00EDa seleccionada es inv\u00E1lida!');
            return;
    }

    let subtotal = quantity * 200;
    $('#total').innerHTML = subtotal - (subtotal * percentage);
});

$('button[name="clear"]').addEventListener("click", function(){
    $('input[name="name"]').value = '';
    $('input[name="lastname"]').value = '';
    $('input[name="email"]').value = '';
    $('input[name="quantity"]').value = '';
    $('select[name="category"]').value = '';
    $('#total').innerHTML = '';
});

function validateData(quantity, category) {
    let result = true;
    if (quantity == '') {
        alert('Debe ingresar una cantidad v\u00E1lida!');
        result = false;
    } else if (isNaN(quantity)) {
        alert('La cantidad ingresada es inv\u00E1lida!');
        result = false;
    }

    if (category == '') {
        alert('Debe ingresar una categor\u00EDa v\u00E1lida!');
        result = false;
    }
    return result;
}