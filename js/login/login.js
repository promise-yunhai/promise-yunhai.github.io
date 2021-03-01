function jump(){
			var i="001208";
			if(document.getElementById("2").value==i){
				window.location.href="html/Navigation.html";
			}
			else if(document.getElementById("2").value==""){
				alert("请输入六位身份密码！");
			}
			else{
				alert("密码错误，请重新输入！");
			}
		}