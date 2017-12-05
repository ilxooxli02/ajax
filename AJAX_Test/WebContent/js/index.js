	function myFunc(){
		$.ajax({
			async: true,
			url : "http://localhost:8081/ajax/ajaxCall",
			timeout : 3000,
			type : "get",
			data : {
				num1 : $("[type=number]:first").val(),
				num2 : $("[type=number]:last").val()
			},
			success : function(data) {
				console.log("2번");
				$("div").html(data);
			},
			error : function() {
				alert("이상");
			}
		});
		console.log("1번");
	}