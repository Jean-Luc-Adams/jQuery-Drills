$(document).ready(function () {

    $('#Submit').click(function () {
        alert('Hey, you clicked me!');
        let value = $('input').val();
        alert(value);
        $('div').append(value);
    })
    $('input[type="submit"]').attr('disabled', 'disabled');
    $('input[type="text"]').keyup(function () {
        if ($('input').val() == "") {
            $('input[type="submit"]').attr('disabled', 'disabled');
        } else {
            $('input[type="submit"]').removeAttr('disabled');
        }
    })
    $('body').append('<div></div>')
});