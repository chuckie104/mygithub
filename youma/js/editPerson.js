
	$(function(){
		$(".select_pro").click(function(){
			var This=$(this);
			$(".pro_list").toggle();
			$(".pro_list li").click(function(){
				var oText=$(this).text();
				This.children('p').text(oText);
			});
		});
		$(".select_pro").mouseleave(function(){
			$(".pro_list").hide();
		});
		$(".select_city").click(function(){
			var This=$(this);
			$(".city_list").toggle();
			$(".city_list li").click(function(){
				var oText=$(this).text();
				This.children('p').text(oText);
			});
		});
		$(".select_city").mouseleave(function(){
			$(".city_list").hide();
		});
		$(".select_qu").click(function(){
			var This=$(this);
			$(".qu_list").toggle();
			$(".qu_list li").click(function(){
				var oText=$(this).text();
				This.children('p').text(oText);
			});
		});
		$(".select_qu").mouseleave(function(){
			$(".qu_list").hide();
		});
	})
