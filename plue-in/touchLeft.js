function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
var oDiv =document.getElementById("area_select");
var aLi=oDiv.getElementsByTagName("li");
var iStartTouchX=0;
var iDis=0;
for(var i=0;i<aLi.length;i++){
	bind(aLi[i],"touchstart",fnStart);
	bind(aLi[i],"touchmove",fnMove);
	bind(aLi[i],"touchend",fnEnd);
}
	
//开始触屏获取参数
function fnStart(ev){
	ev=ev.changedTouches[0];
	iStartTouchX =ev.pageX;
}
//地址滑动添加事件
function fnMove(ev)
	{
		ev=ev.changedTouches[0];
		iDis=ev.pageX-iStartTouchX;		
	}
	//鼠标起来
function fnEnd(ev)
	{

		if(iDis<0){
			$(this).css({
				transform:'translateX(-31%)',
				transition:0.5+"s"
			});
			$(this).siblings('li').css({
				transform:'translateX(0)'
			});
		}else{
			$(this).css({
				transform:'translateX(0)'
			});
		}
		
	}