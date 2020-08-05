$(document).ready(function() {
    $('.login').hide();
    $('.signup').hide();
    $('#login').click(function(e) {
        e.preventDefault();
        $('.signup').hide();
        $('.login').show();
    });
    $('#signup').click(function(e) {
        e.preventDefault();
        $('.login').hide();
        $('.signup').show();
    });
    $('.logo').click(function(e) {
        e.preventDefault();
        $('.login').hide();
        $('.signup').hide();
    });
    $('#actionlogin').click(function(e) {
        e.preventDefault();
        let user = $('#userlogin').val();
        let password = $('#passwordlogin').val();
        console.log(user);
        console.log(password);
        if (user == 'admin' && password == 'admin') {
            $('#formlogin').hide();
            $('#formsignup').hide();
            alert("Đăng nhập thành công.");
        } else {
            alert("Sai user hoặc password.")
        }
    });
});