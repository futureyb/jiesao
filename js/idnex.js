$(function(){
	$(".con1").hover(function(){
		$("#img_1").attr("src","img/qq2.png");
		$(".con1").css("background-color","#575757")
	},function(){
		$("#img_1").attr("src","img/qq.png")
		$(".con1").css("background-color","rgb(255,255,255,0.0)")
	})
	
	$(".con2").hover(function(){
		$("#img_2").attr("src","img/微信1.png");
		$(".con2").css("background-color","#575757")
	},function(){
		$("#img_2").attr("src","img/weixin.png")
		$(".con2").css("background-color","rgb(255,255,255,0.0)")
	})
	
	$(".con3").hover(function(){
		$("#img_3").attr("src","img/邮箱1.png");
		$(".con3").css("background-color","#575757")
	},function(){
		$("#img_3").attr("src","img/邮箱.png")
		$(".con3").css("background-color","rgb(255,255,255,0.0)")
	})
	
	
})