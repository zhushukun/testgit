$(function() {
	$('#searchinp').on("focus", function() {
		$(this).css("outline", "none");
	});

	//banner轮播图
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false
	});
	
	//底部轮播图
	$(".swipbox").superSlider({
		prevBtn: ".prev", //左按钮
		nextBtn: ".next", //右按钮
		listCont: "#roll", //滚动列表外层
		scrollWhere: "prev", //自动滚动方向next
		delayTime: 3000, //自动轮播时间间隔
		speed: 700, //滚动速度
		amount: 1, //单次滚动数量
		showNum: 5, //显示数量
		autoPlay: true, //自动播放
	});

})