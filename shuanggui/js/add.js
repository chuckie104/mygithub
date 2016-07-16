$(function(){	
		$(".homePage_card ").click(function(){
			var $_div=$(this).parent().siblings('.homePage_img');
			var oSrc= $_div.find("img").attr('src');			
			$_div.append("<img src='"+oSrc+"' class='newImg'>");
			var oLeft=$("#bottom_shopping").offset().left;
			var oTop=$("#bottom_shopping").offset().top;
			var aLeft=$_div.find('img').offset().left;
			var aTop=$_div.find('img').offset().top;
			$_div.find('img').eq(0).css({
				left: oLeft-aLeft,
				top: oTop-aTop,
				transform:"scale(0.5) rotate(720deg)",
				transition:"2000ms",
				zIndex:999,
				opacity: 0.5
			});		
		 var aTime=	setTimeout(function(){
					$_div.find('img')[0].style.transition="0s";
					$_div.find('img')[0].style.transform="scale(1) rotate(0)";
					$_div.find('img')[0].style.left=0;
					$_div.find('img')[0].style.top=0;
					$_div.find('img')[0].style.zIndex=1;
					$_div.find('img')[0].style.opacity=1;
					$_div.find('img')[1].remove();	
					$(".end_alert").css('display', 'table');
					setTimeout(function(){
					$(".end_alert").css('display', 'none');
				}, 1000);
					}, 2000);
			});			 		
})