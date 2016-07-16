
//校验数字
$.fn.onlyNum=function (){
var regix = /^\d+$/g;
if(!regix.test(this.val())){
	alert("输入必须为数字");
	this.val('');
}
	
	return this;
}	


//校验字母或数字
$.fn.onlyWord=function (){
var regix = /^(\w|[\u4e00-\u9fa5])+$/g;
if(!regix.test(this.val())){
	alert("输入必须为字母,数字或汉字");
	this.val('');;
  }
	return this;
}	



//校验字母
$.fn.onlyAlpha=function (){
	var regix = /^([a-zA-Z]|[\u4e00-\u9fa5])+$/g;
	if(!regix.test(this.val())){
		alert("输入必须为字母或汉字");
		this.val('');
	}
	return this;
}

//正则判断金额
$.fn.checkMoney=function (){
	var regix = /^([1-9]\d*|0)(\.\d{1,2})?$/;
	if(!regix.test(this.val())){
		alert("请输入正确金额");
		this.val('');
	}
	return this;
	}

//非空判断
$.fn.nullCheck=function(){
	if($.trim(this.val())==""||$.trim(this.val())==null||$.trim(this.val())==undefined){
		return false;
	}
	return true;
}

var checkNum = function(object){
	object.change(function(){
		   $(this).onlyNum();
	   });
}

var checkWord = function(object){
	object.change(function(){
		   $(this).onlyWord();;
	   });
}

var checkAlpha = function(object) {
	object.change(function(){
		   $(this).onlyAlpha;
	   });
}

var checkNull = function(object, message) {
	if(!object.nullCheck()){
        showAlert(message); 
 	   return false;
    }
	
	return true;
}




