function checkPassword() {
    var password = document.getElementById("password").value;
    var correctPassword = "123456"; // ตั้งรหัสผ่านที่นี่

    if (password === correctPassword) {
        document.getElementById("video-container").style.display = "block";
        document.getElementById("login-box").style.display = "none";
    } else {
        alert("รหัสผ่านไม่ถูกต้อง!");
    }
}
