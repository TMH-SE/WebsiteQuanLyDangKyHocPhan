function ktsub() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s\']+$/;
        if ($("#subjectName-new").val() == "") {
            $("#tbsub").html("*Bắt buộc nhập tên môn học");
            return false;
        }
        if (!reg.test($("#subjectName-new").val())) {
            $("#tbsub").html("Tên môn học chỉ chứa kí tự chữ");
            return false;
        }
        $("#subjectName-new").html("");
        return true;
}
$("#subjectName-new").on("blur", ktsub);
function ktid() {
        var reg = /^[0-9]+$/;
        if ($("#IDsubject-new").val() == "") {
            $("#tbid").html("*Bắt buộc nhập mã môn học");
            return false;
        }
        if (!reg.test($("#IDsubject-new").val())) {
            $("#tbid").html("Mã môn học chỉ chứa ký tự số");
            return false;
        }
        $("#IDsubject-new").html("");
        return true;
}
$("#IDsubject-new").on("blur", ktid);
function ktteacher() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s]+$/;
        if ($("#teacher-new").val() == "") {
            $("#tbteacher").html("*Bắt buộc nhập tên giảng viên");
            return false;
        }
        if (!reg.test($("#teacher-new").val())) {
            $("#tbteacher").html("Tên giảng viên phải chứa kí tự chữ");
            return false;
        }
        $("#teacher-new").html("");
        return true;
}
$("#teacher-new").on("blur", ktteacher);
function ktschedule() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s\d\,\\\']{2,}$/;
        if ($("#schedule-new").val() == "") {
            $("#tbschedule").html("*Bắt buộc nhập lịch dạy");
            return false;
        }
        if (!reg.test($("#schedule-new").val())) {
            $("#tbschedule").html("Chỉ chứa ký tự chữ và số");
            return false;
        }
        $("#schedule-new").html("");
        return true;
}
$("#schedule-new").on("blur", ktschedule);
function ktuser() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s\']+$/;
        if ($("#Username-new").val() == "") {
            $("#tbusername").html("*Bắt buộc nhập tên user");
            return false;
        }
        if (!reg.test($("#Username-new").val())) {
            $("#tbusername").html("Tên user chỉ chứa kí tự chữ");
            return false;
        }
        $("#Username-new").html("");
        return true;
}
$("#Username-new").on("blur", ktuser);
function ktiduser() {
        var reg = /^[0-9]+$/;
        if ($("#IDUser-new").val() == "") {
            $("#tbiduser").html("*Bắt buộc nhập mã user");
            return false;
        }
        if (!reg.test($("#IDUser-new").val())) {
            $("#tbiduser").html("Mã user chỉ chứa ký tự số");
            return false;
        }
        $("#IDUser-new").html("");
        return true;
}
$("#IDUser-new").on("blur", ktiduser);
function ktfalcuty() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s\']+$/;
        if ($("#falcuty-new").val() == "") {
            $("#tbfalcuty").html("*Bắt buộc nhập tên khoa");
            return false;
        }
        if (!reg.test($("#falcuty-new").val())) {
            $("#tbfalcuty").html("Tên khoa chỉ chứa kí tự chữ");
            return false;
        }
        $("#falcuty-new").html("");
        return true;
}
$("#falcuty-new").on("blur", ktfalcuty);
// ELEMENT
function elm(x){
    var target = x.substring(1);
    var type = x.charAt(0);
    if(type == '#'){
        return document.getElementById(target);
    }else if(type == '.'){
        return document.getElementsByClassName(target);  
    }else {
        return document.getElementsByTagName(x);
    }
}
// SUB MENU
if(elm(".has-submenu")){
    for(var i=0,len=elm(".has-submenu").length; i<len; i++){
        elm(".has-submenu")[i].onclick = function(e){
            e.stopPropagation();
            toggle(this.nextElementSibling);
        }
    }   
}
//TOGGLE
function toggle(x){
  var css = window.getComputedStyle(x,null);
    if(css.getPropertyValue("display") == 'none'){
        x.style.display = 'block';
    }else {
        x.style.display = 'none';
    }
}



