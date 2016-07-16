	$.fn.onlyNum=function (){
	this.val(this.val().replace(/\D/g,''));
	alert("输入必须为数字");
	return this;
	}	
