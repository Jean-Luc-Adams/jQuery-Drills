$(document).ready(function () {

    //Makes a button that alerts the text inputted in the text field
    $('#Submit').click(function () {
        alert('Hey, you clicked me!');
        let value = $('input').val();
        alert(value);
    })

    //Makes the submit button active if there is text in the field, disabled if not
    $('#Input').on('input', function () {
        let inputText = $('#Input').val();
        if (inputText.length == "") {
            $('#Submit').attr('disabled', true);
        } else {
            $('#Submit').attr('disabled', false);
        };
    });

    /* Makes an h2 of the input submitted, and changes the style of it when hovered over
     $("form").submit(function(e){
         e.preventDefault();
         let message = $('input').val();
         $('div').append(`<h2 class="style">${message}</h2>`);
         $('h2').hover(function() {
             $('.style').css('background-color', 'lightblue');
             $('.style').css('border-radius', '10px');
         });
     }); */

    //Appends the div to the body 
    $('body').append('<div></div>');

    //Makes an unordered list of the input submitted, changes the background of the list item into a random color then removes said item when doubled clicked
    $("form").submit(function (event) {
        event.preventDefault();
        let message = $('input').val();
        $('div').append('<ul></ul>')
        $('ul').append(`<li class="style">${message}</li>`);
        $('li').click(function (clickEvent) {
            $(clickEvent.currentTarget).css('background-color', randColor);
        });
        $('li').dblclick(function (clickEvent) {
            $(clickEvent.currentTarget).remove();
        });
    });

    //Random color generator
    var rand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)];
    let randColor = color;
});