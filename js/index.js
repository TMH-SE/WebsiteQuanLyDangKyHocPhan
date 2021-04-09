$(function () {
/*kiem tra cho form dang nhap chinh*/
    function ktUser() {
        var reg = /^\d{8}$/;
        if ($("#txtUser").val() == "") {
            $("#tbUser").html("*Bắt buộc nhập tên đăng nhập");
            return false;
        }
        if (!reg.test($("#txtUser").val())) {
            $("#tbUser").html("Tên đăng nhập là mã số 8 chữ số");
            return false;
        }
        $("#tbUser").html("");
        return true;
    }
    function ktPass() {
        var reg = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;
        if ($("#txtPass").val() == "") {
            $("#tbPass").html("*Bắt buộc nhập mật khẩu");
            return false;
        }
        if (!reg.test($("#txtPass").val())) {
            $("#tbPass").html("Mật khẩu phải ít nhất 6 kí tự bao gồm cả chữ và số");
            return false;
        }
        $("#tbPass").html("");
        return true;
    }
    function login() {
        if (ktUser() == false || ktPass() == false) {
            alert("Đăng nhập thất bại!!!")
            return false;
        }
        else {
            if ($("#slt-login").val() === "sinh viên") {
                $("#txtUser").val("");
                $("#txtPass").val("");
                window.open("sinhvien.html", target = "_blank");
                return true;
            }
            if ($("#slt-login").val() === "giảng viên") {
                $("#txtUser").val("");
                $("#txtPass").val("");
                $("#slt-login").val("sinh viên");
                window.open("giangvien.html", target = "_blank");
                return true;
            }
        }
    }
    $("#txtUser").on("blur", ktUser);
    $("#txtPass").on("blur", ktPass);
    $("#btnLogin").on("click", login);
/*kiem tra cho modal sinh vien*/
    function ktUserModsv() {
        var reg = /^\d{8}$/;
        if ($("#txtUserModsv").val() == "") {
            $("#tbUserModsv").html("*Bắt buộc nhập tên đăng nhập");
            return false;
        }
        if (!reg.test($("#txtUserModsv").val())) {
            $("#tbUserModsv").html("Tên đăng nhập là mã số 8 chữ số");
            return false;
        }
        $("#tbUserModsv").html("");
        return true;
    }
    function ktPassModsv() {
        var reg = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;
        if ($("#txtPassModsv").val() == "") {
            $("#tbPassModsv").html("*Bắt buộc nhập mật khẩu");
            return false;
        }
        if (!reg.test($("#txtPassModsv").val())) {
            $("#tbPassModsv").html("Mật khẩu phải ít nhất 6 kí tự bao gồm cả chữ và số");
            return false;
        }
        $("#tbPassModsv").html("");
        return true;
    }
    function loginModsv() {
        if (ktUserModsv() == false || ktPassModsv() == false) {
            alert("Đăng nhập thất bại!!!")
            return false;
        }
        $("#txtUserModsv").val("");
        $("#txtPassModsv").val("");
        $('#myModalsv').modal('hide')
        window.open("sinhvien.html", target = "_blank");
        return true;
    }
    $("#txtUserModsv").on("blur", ktUserModsv);
    $("#txtPassModsv").on("blur", ktPassModsv);
    $("#btnLoginModsv").on("click", loginModsv);

/*kiem tra cho modal giang vien*/
    function ktUserModgv() {
        var reg = /^\d{8}$/;
        if ($("#txtUserModgv").val() == "") {
            $("#tbUserModgv").html("*Bắt buộc nhập tên đăng nhập");
            return false;
        }
        if (!reg.test($("#txtUserModgv").val())) {
            $("#tbUserModgv").html("Tên đăng nhập là mã số 8 chữ số");
            return false;
        }
        $("#tbUserModgv").html("");
        return true;
    }
    function ktPassModgv() {
        var reg = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;
        if ($("#txtPassModgv").val() == "") {
            $("#tbPassModgv").html("*Bắt buộc nhập mật khẩu");
            return false;
        }
        if (!reg.test($("#txtPassModgv").val())) {
            $("#tbPassModgv").html("Mật khẩu phải ít nhất 6 kí tự bao gồm cả chữ và số");
            return false;
        }
        $("#tbPassModgv").html("");
        return true;
    }
    function loginModgv() {
        if (ktUserModgv() == false || ktPassModgv() == false) {
            alert("Đăng nhập thất bại!!!")
            return false;
        }
        $("#txtUserModgv").val("");
        $("#txtPassModgv").val("");
        $('#myModalgv').modal('hide')
        window.open("giangvien.html", target = "_blank");
        return true;
    }
    $("#txtUserModgv").on("blur", ktUserModgv);
    $("#txtPassModgv").on("blur", ktPassModgv);
    $("#btnLoginModgv").on("click", loginModgv);
})
