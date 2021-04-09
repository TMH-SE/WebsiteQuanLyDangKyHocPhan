﻿// JavaScript source code
$(document).ready(function(){
	$("#DSsv").click(function(){
		if($("#Mon").val()=="HTVCNW"){
				$("#table-NhapDiem").children().remove();
				var markup=
				"<div class=\"table-responsive\">"+
						"<table class=\"table table-bordered\">"+
							"<thead>"+
								"<tr>"+
									"<td>STT</td>"+
									"<td>Họ Tên</td>"+
									"<td>MSSV</td>"+
									"<td>TK1</td>"+
									"<td>TK2</td>"+
									"<td>TK3</td>"+
									"<td>Giữa kì</td>"+
									"<td>Thực hành</td>"+
									"<td>Cuối kì</td>"+
									"<td>Tổng kết</td>"+
								"</tr>"+
							"</thead>"+
							"<tbody>"+
								"<tr>"+
									"<td>1</td>"+
									"<td>Phạm Thanh Hải</td>"+
									"<td>123456789</td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" class='total' disabled></td>"+
								"</tr>"+
								"<tr>"+
									"<td>2</td>"+
									"<td>Trần Minh Hiếu</td>"+
									"<td>46217825</td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
									"<td><input type=\"text\" style=\"max-width:40px\" class='total' disabled></td>"+
								"</tr>"+
							"</tbody>"+
						"</table>"+
					"</div>";		
			$("#table-NhapDiem").append(markup);
			}
			if($("#Mon").val()=="PTTKHT"){
			$("#table-NhapDiem").children().remove();
			var markup=
			"<div class=\"table-responsive\">"+
					"<table class=\"table table-bordered\">"+
						"<thead>"+
							"<tr>"+
								"<td>STT</td>"+
								"<td>Họ Tên</td>"+
								"<td>MSSV</td>"+
								"<td>TK1</td>"+
								"<td>TK2</td>"+
								"<td>TK3</td>"+
								"<td>Giữa kì</td>"+
								"<td>Thực hành</td>"+
								"<td>Cuối kì</td>"+
								"<td>Tổng kết</td>"+
							"</tr>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td>1</td>"+
								"<td>Phạm Minh Đức</td>"+
								"<td>23564578</td>"+
								"<td><input type='text' onchange=checkNumber(this) style=\"max-width:40px\"></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td class=''><input type=\"text\" style=\"max-width:40px\" class='total' disabled></td>"+
							"</tr>"+
							"<tr>"+
								"<td>2</td>"+
								"<td>Phạm Thị Mông Lung</td>"+
								"<td>856784512</td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" onchange=checkNumber(this)></td>"+
								"<td><input type=\"text\" style=\"max-width:40px\" class='total' disabled></td> "+
							"</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>";		
			$("#table-NhapDiem").append(markup);
			}
	});
	function ktdiem(){
		
	}
});

function checkNumber(el){
	var value=$(el).val();
	if(isNaN(value)){
		$(el).val(0);
		alert('Giá trị nhập phải là số');
		return;
	}
	
	if(value<0||value>10){
		$(el).val(0);
		alert('Giá trị nhập phải từ 0->10');
		return;
	}
	
	var row=$(el).parents('tr');
	
	var inputs=$(row).find('input');
	var total=0;
	
	for(var i=0;i<inputs.length-1;i++){
		var curValue=$(inputs[i]).val();
		if(!isNaN(curValue)){
			total+=Number(curValue);
		}
		
	}
	var avg=total/(inputs.length-1);
	$(inputs[inputs.length-1]).val(avg.toFixed(2));
	
	
	
	
}
