
$(function () {
    function addmon(){
        if($("input[name='rad']:checked").val()=="nhapmonlaptrinh")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='nhapmonlaptrinh' /></td>" +
                " <td>Nhập môn lập trình</td>" +
                "<td>210154005</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Mông Lung</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A2.10</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='nhapmonlaptrinh' /></td>" +
                " <td>Nhập môn lập trình</td>" +
                "<td>210154005</td>" +
                " <td>3</td>" +
                "<td>Phạm Minh Đức</td>" +
                "<td>Thứ 4 Tiết 7-9</td>" +
                "<td>B2.10</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='nhapmonlaptrinh' /></td>" +
                " <td>Nhập môn lập trình</td>" +
                "<td>210154005</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Minh Đức</td>" +
                "<td>Thứ 6 Tiết 7-9</td>" +
                "<td>D2.10</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='nhapmonlaptrinh' /></td>" +
                " <td>Nhập môn lập trình</td>" +
                "<td>210154005</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Đức</td>" +
                "<td>Thứ 5 Tiết 7-9</td>" +
                "<td>X10.10</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="nhapmontinhoc")
        {
            var markup = "<tr class='tr1'>" +
                " <td><input type='radio' name='radio' value='nhapmontinhoc' /></td>" +
                " <td>Nhập môn tin học</td>" +
                "<td>210154006</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Mông Lung</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A2.10</td>" +
                "</tr >" +
                "<tr class='tr1'>" +
                " <td><input type='radio' name='radio' value='nhapmontinhoc' /></td>" +
                " <td>Nhập môn tin học</td>" +
                "<td>210154006</td>" +
                " <td>3</td>" +
                "<td>Phạm Minh Đức</td>" +
                "<td>Thứ 4 Tiết 7-9</td>" +
                "<td>B2.10</td>" +
                "</tr >" +
                "<tr class='tr1'>" +
                " <td><input type='radio' name='radio' value='nhapmontinhoc' /></td>" +
                " <td>Nhập môn tin học</td>" +
                "<td>210154006</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Minh Đức</td>" +
                "<td>Thứ 6 Tiết 7-9</td>" +
                "<td>D2.10</td>" +
                "</tr >"+
                "<tr class='tr1'>" +
                " <td><input type='radio' name='radio' value='nhapmontinhoc' /></td>" +
                " <td>Nhập môn tin học</td>" +
                "<td>210154006</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Đức</td>" +
                "<td>Thứ 5 Tiết 7-9</td>" +
                "<td>X10.10</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="toana1")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='toana1' /></td>" +
                " <td>Toán A1</td>" +
                "<td>210154007</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Mông Lung</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A2.10</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='toana1' /></td>" +
                " <td>Toán A1</td>" +
                "<td>210154007</td>" +
                " <td>3</td>" +
                "<td>Phạm Minh Đức</td>" +
                "<td>Thứ 4 Tiết 7-9</td>" +
                "<td>B2.10</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='toana1' /></td>" +
                " <td>Toán A1</td>" +
                "<td>210154007</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Minh Đức</td>" +
                "<td>Thứ 6 Tiết 7-9</td>" +
                "<td>D2.10</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='toana1' /></td>" +
                " <td>Toán A1</td>" +
                "<td>210154007</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Đức</td>" +
                "<td>Thứ 5 Tiết 7-9</td>" +
                "<td>X10.10</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="cautrucroirac")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='cautrucroirac' /></td>" +
                " <td>Cấu Trúc Rời Rạc</td>" +
                "<td>210154008</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Mông Lung</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A2.10</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='cautrucroirac' /></td>" +
                " <td>Cấu Trúc Rời Rạc</td>" +
                "<td>210154008</td>" +
                " <td>3</td>" +
                "<td>Phạm Minh Đức</td>" +
                "<td>Thứ 4 Tiết 7-9</td>" +
                "<td>B2.10</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='cautrucroirac' /></td>" +
                " <td>Cấu Trúc Rời Rạc</td>" +
                "<td>210154008</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Minh Đức</td>" +
                "<td>Thứ 6 Tiết 7-9</td>" +
                "<td>D2.10</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='cautrucroirac' /></td>" +
                " <td>Cấu Trúc Rời Rạc</td>" +
                "<td>210154008</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Thị Đức</td>" +
                "<td>Thứ 5 Tiết 7-9</td>" +
                "<td>X10.10</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="phuongphaptinh")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='phuongphaptinh' /></td>" +
                " <td>Phương Pháp Tính</td>" +
                "<td>210154009</td>" +
                " <td>2</td>" +
                "<td>Nguyễn Thị Mông Lung</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A2.10</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='phuongphaptinh' /></td>" +
                " <td>Phương Pháp Tính</td>" +
                "<td>210154009</td>" +
                " <td>2</td>" +
                "<td>Phạm Minh Đức</td>" +
                "<td>Thứ 4 Tiết 7-9</td>" +
                "<td>B2.10</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='phuongphaptinh' /></td>" +
                " <td>Phương Pháp Tính</td>" +
                "<td>210154009</td>" +
                " <td>2</td>" +
                "<td>Nguyễn Thị Minh Đức</td>" +
                "<td>Thứ 6 Tiết 7-9</td>" +
                "<td>D2.10</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='phuongphaptinh' /></td>" +
                " <td>Phương Pháp Tính</td>" +
                "<td>210154009</td>" +
                " <td>2</td>" +
                "<td>Nguyễn Thị Đức</td>" +
                "<td>Thứ 5 Tiết 7-9</td>" +
                "<td>X10.10</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
    }
    var stc = 0;
    $("#regisSubject").on("click", function () {
        if ($("input[name='radio']:checked").val() == "nhapmonlaptrinh" && (stc += 3) <= 9) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        }
        else if ($("input[name='radio']:checked").val() == "nhapmontinhoc" && (stc += 3) <= 9) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        } 
        else if ($("input[name='radio']:checked").val() == "toana1" && (stc += 3) <= 9) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        } 
        else if ($("input[name='radio']:checked").val() == "cautrucroirac" && (stc += 3) <= 9) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        }
        else if ($("input[name='radio']:checked").val() == "phuongphaptinh" && (stc += 2) <= 9) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        }
        else {
            alert("Số tín chỉ đăng kí tối đa là 9");
            if ($("input[name='radio']:checked").val() == "phuongphaptinh") {
                stc -= 2;
            }
            else
                stc -= 3;
        }
        
            
    })
    $("#cancelSubject").on("click", function () {
        $("#tblregisted").find("input[name='radio']").each(function () {
            if ($(this).is(":checked")) {
                if ($(this).val() == "phuongphaptinh") {
                    stc =stc- 2;
                    $("#5").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "nhapmonlaptrinh") {
                    stc =stc- 3;
                    $("#1").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "nhapmontinhoc") {
                    stc = stc - 3;
                    $("#2").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "toana1") {
                    stc = stc - 3;
                    $("#3").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "cautrucroirac") {
                    stc = stc - 3;
                    $("#4").parents("tr").show();
                    $(this).parents("tr").remove();
                }
            }
        });
    })

    $("input[name='rad']").on("click", addmon);

})