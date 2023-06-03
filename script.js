function generatePassword() {
    var length = document.getElementById("length").value;
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;

    var characterSet = "";
    if (uppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characterSet += "0123456789";
    if (symbols) characterSet += "!@#$%^&*()_+";

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById("password").value = password;
}
