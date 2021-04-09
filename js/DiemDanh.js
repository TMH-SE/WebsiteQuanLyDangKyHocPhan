// JavaScript source code
$(document).ready(function(){
	$("#Mon").change(function(){
		if($("#Mon").val()=="HTVCNW"){
			 var markup="<option value=\"DHKTPM12A\">DHKTPM12A</option>"+
							"<option value=\"DHHTTT12A\">DHHTTT12A</option>";		
			$("#Lop").children().remove();
			$("#Lop").append(markup);
		}
		if($("#Mon").val()=="LTHSK"){
			var markup="<option value=\"DHCNTT12B\">DHCNTT12B</option>"+
							"<option value=\"DHHTTT12B\">DHHTTT12B</option>";		
			$("#Lop").children().remove();
			$("#Lop").append(markup);
		}
		if($("#Mon").val()=="none"){
			var markup="<option value=\"none\">--Chọn Lớp--</option>";
			$("#Lop").children().remove();
			$("#Lop").append(markup);
		}
	});

	$("#DSsv").click(function(){
		$("#table-diemdanh").children().remove();
		if($("#Mon").val()=="HTVCNW" && $("#Lop").val()=="DHKTPM12A"){
		var tablediemdanh=
				"<div class=\"table-responsive\">"+
					"<table class=\"table table-bordered\">"+
						"<thead id=\"table-head\">"+
							"<tr>"+
								"<td>STT</td>"+
								"<td>Họ Tên</td>"+
								"<td>MSSV</td>"+
								"<td>4/5</td>"+
								"<td>11/5</td>"+
								"<td>18/5</td>"+
								"<td>25/5</td>"+
								"<td>1/6</td>"+
								"<td>8/6</td>"+
							"</tr>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td>1</td>"+
								"<td>Phạm Thanh Hải</td>"+
								"<td>12345678</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
							"</tr>"+
							"<tr>"+
								"<td>2</td>"+
								"<td>PHạm Minh Đức</td>"+
								"<td>01234567</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
						"	</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>" ;		
		$("#table-diemdanh").append(tablediemdanh);
		}
		if($("#Mon").val()=="LTHSK" && $("#Lop").val()=="DHHTTT12B"){
		var tablediemdanh=
				"<div class=\"table-responsive\">"+
					"<table class=\"table table-bordered\">"+
						"<thead id=\"table-head\">"+
							"<tr>"+
								"<td>STT</td>"+
								"<td>Họ Tên</td>"+
								"<td>MSSV</td>"+
								"<td>4/5</td>"+
								"<td>11/5</td>"+
								"<td>18/5</td>"+
								"<td>25/5</td>"+
								"<td>1/6</td>"+
								"<td>8/6</td>"+
							"</tr>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td>1</td>"+
								"<td>Phạm Thị Mông Lung</td>"+
								"<td>24631245</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
							"</tr>"+
							"<tr>"+
								"<td>2</td>"+
								"<td>Trần Minh Hiếu</td>"+
								"<td>64532154</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
						"	</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>" ;		
		$("#table-diemdanh").append(tablediemdanh);
		}
		if($("#Mon").val()=="HTVCNW" && $("#Lop").val()=="DHHTTT12A"){
		var tablediemdanh=
				"<div class=\"table-responsive\">"+
					"<table class=\"table table-bordered\">"+
						"<thead id=\"table-head\">"+
							"<tr>"+
								"<td>STT</td>"+
								"<td>Họ Tên</td>"+
								"<td>MSSV</td>"+
								"<td>4/5</td>"+
								"<td>11/5</td>"+
								"<td>18/5</td>"+
								"<td>25/5</td>"+
								"<td>1/6</td>"+
								"<td>8/6</td>"+
							"</tr>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td>1</td>"+
								"<td>Trần Thị Mông Lung</td>"+
								"<td>12345678</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
							"</tr>"+
							"<tr>"+
								"<td>2</td>"+
								"<td>Trần Minh Hiếu</td>"+
								"<td>12455623</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
						"	</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>" ;		
		$("#table-diemdanh").append(tablediemdanh);
		}
		if($("#Mon").val()=="LTHSK" && $("#Lop").val()=="DHCNTT12B"){
		var tablediemdanh=
				"<div class=\"table-responsive\">"+
					"<table class=\"table table-bordered\">"+
						"<thead id=\"table-head\">"+
							"<tr>"+
								"<td>STT</td>"+
								"<td>Họ Tên</td>"+
								"<td>MSSV</td>"+
								"<td>4/5</td>"+
								"<td>11/5</td>"+
								"<td>18/5</td>"+
								"<td>25/5</td>"+
								"<td>1/6</td>"+
								"<td>8/6</td>"+
							"</tr>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td>1</td>"+
								"<td>Nguyễn Đình Thuận</td>"+
								"<td>12457823</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
							"</tr>"+
							"<tr>"+
								"<td>2</td>"+
								"<td>PHạm Minh Đức</td>"+
								"<td>01234567</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
						"	</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>" ;		
		$("#table-diemdanh").append(tablediemdanh);
		}
	});

	
});