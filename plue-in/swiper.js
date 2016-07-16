
//轮播滑动插件	 div与ul必须传入id
function swiper(parentDiv,childUl,bannerDot){
		var oDiv=document.querySelector("#"+parentDiv+"");//最顶层父类div
		var oList=document.querySelector("#"+childUl+"");//中间ul层
		var oLi=oList.getElementsByTagName("li");	//li层
		var length=oLi.length;
		oList.style.width=100*length+"%";//ul的宽度
		var uHeight=oList.offsetHeight;
		for(var i=0;i<length;i++){
			oLi[i].style.width=100/length+"%";
		}
		var w=oLi[0].offsetWidth;//获取li的宽度	
		//取消窗口滑动
		document.ontouchmove=function(ev){
			ev.preventDefault();
		}
		var dowmX=0;
		var uLeft=0;
		var padge=true;
		var kaiguan=true;
		var iNow=0;
		var dateTime =0;
		var timer=setInterval(auto, 2000);
		function auto(){		
			iNow++;	
			iNow=iNow%length;
			$("#"+childUl+"").animate({
				left: -iNow*w
				},
				400);	
			$("#"+bannerDot+"").find("span").eq(iNow).addClass('active_dot');
			$("#"+bannerDot+"").find("span").eq(iNow).siblings('span').removeClass('active_dot');		
		}
		oList.ontouchstart=function(ev){
				clearTimeout(timer);
				dateTime=Date.now();
				var touch =ev.changedTouches[0];
				dowmX=touch.pageX;
				uLeft=this.offsetLeft;
		}
		oList.ontouchmove=function(ev){
			var touch =ev.changedTouches[0];
			if(this.offsetLeft>=0){
				if(padge){
					padge=false;
					dowmX=touch.pageX;
				}
				this.style.left=(touch.pageX-dowmX)/3+"px";
			}else if(this.offsetLeft<=oDiv.offsetWidth-oList.offsetWidth){
				if(padge){
					padge=false;
					dowmX=touch.pageX;
				}
				this.style.left=(touch.pageX-dowmX)/3+(oDiv.offsetWidth-oList.offsetWidth)
				+"px";
			}	
			else{
				this.style.left=touch.pageX-dowmX+uLeft+"px";}
			
		}
		oList.ontouchend=function(ev){
			var touch =ev.changedTouches[0];
			timer=setInterval(auto, 2000);
			if(dowmX>touch.pageX){

				if(iNow<length-1){
					if(dowmX-touch.pageX>w/2 || Date.now()-dateTime<300){
					iNow++;
					}
				}
			}else{
				if(iNow!=0){	
					if(touch.pageX-dowmX>w/2 || ((Date.now()-dateTime<300)&&(touch.pageX-dowmX>30))){	
					iNow--;
					}
				}
			}
			$("#"+childUl+"").animate({
				left: -iNow*w
				},
				400);
			$("#"+bannerDot+"").find("span").eq(iNow).addClass('active_dot');
			$("#"+bannerDot+"").find("span").eq(iNow).siblings('span').removeClass('active_dot');
		}	
	}