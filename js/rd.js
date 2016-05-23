$(function(){
	var scroll=$('body').scrollTop();
//	$('.nav_home').click(function(){
//		$('body').scrollTop(400);
//	})
	$('.nav_we').click(function(){
		$('body').animate({scrollTop:650},600);
	})
//	$('.nav_com').click(function(){
//		$('body').animate({scrollTop:0},1000);
//	})
	$('.nav_pro').click(function(){
		$('body').animate({scrollTop:1450},1200);
	})
	$('.nav_team').click(function(){
		$('body').animate({scrollTop:2620},1500);
	})
	$('.nav_about').click(function(){
		$('body').animate({scrollTop:3000},2000);
	})
	
	//滚动监听
	$(window).scroll(function(){
		var f_top = window.pageYOffset || document.documentElement.scrollTop || 0;
		if (f_top>0) {
			$(".navbar-default").css({"background":"#f8f8f8","color":"#049fbb","border-bottom":"1px solid #CCC",'box-shadow':" 0 0 4px 0 #000000"});
			$(".navbar-default a").css("color","#049FBB");
		} else {
			$(".navbar-default").css({"background":"none","color":"#fff",'border':'none','box-shadow':'none'})
		}
	});
	
	
})