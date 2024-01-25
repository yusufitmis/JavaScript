$(function () {
    function isEmail(email) {
        var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return pattern.test(email)
    }
    $("button").click(function () {
        var errormessage = "";
        $("#error").html("");

        if ($("#email").val() == "") {
            errormessage += "<p> email alanı zorunlu </p>";
        }
        if (isEmail($("#email").val()) == false) {
            errormessage += "<p> email alanı doğru girilmedi </p>";
        }

        if ($("#name").val() == "") {
            errormessage += "<p> Ad alanı zorunlu </p>";
        }
        if ($("#password").val() == "") {
            errormessage += "<p> Sifre alanı zorunlu </p>";
        }
        if ($("#password").val() != $("#passwordtekrar").val()) {
            errormessage += "<p> parolalar eşleşmiyor </p>";
        }
        if (errormessage != "") {
            $("#error").html(errormessage);
        }
    });
});