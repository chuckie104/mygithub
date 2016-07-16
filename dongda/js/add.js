$(function(){	
		var iCount=1; 
		$(".shopCard_logo ").click(function(){		
			var $_div=$(this).parent().siblings('.homeProduct_img');
			var oSrc= $_div.find("img").attr('src');			
			$_div.append("<img src='"+oSrc+"' class='newImg'>");
			var oLeft=$("#shopping_card").offset().left;
			var oTop=$("#shopping_card").offset().top;
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
		 			var oThis=$_div.find('img').eq(0);
		 			oThis.css({
		 				transform:"scale(1) rotate(0)",
		 				left:0,
		 				top:0,
		 				transition:"0s",
		 				zIndex:1,
		 				opacity: 1
		 			});
					$_div.find('img')[1].remove();	
					$(".end_alert").css('display', 'table');
					$(".shopping_num").show();
					$(".shopping_num").text(iCount);
					iCount++;
					setTimeout(function(){
					$(".end_alert").css('display', 'none');
				}, 1000);
					}, 2000);
			});			 		
})



