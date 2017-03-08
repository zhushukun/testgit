$(function() {
	$('input').on("focus", function() {
		$(this).css("outline", "none");
	});
	var con = 0;
	$(".fotthree .sp3").click(function() {
		con++;
		if(con % 2 == 1) {
			$(this).css({
				"background-color": "#fff",
				"color": "#ee6d56"
			});
			$(this).find("i").addClass("fa-angle-down");
			var topxx = $("#disabtabel").height() + 2;
			$("#disabtabel").css({
				"display": "block",
				"top": -topxx
			});
		} else {
			$(this).css({
				"background-color": "#f9f9f9",
				"color": "#555"
			});
			$(this).find("i").removeClass("fa-angle-down");

			$("#disabtabel").css({
				"display": "none"
			});
		}
	});
	$(".titlabel span").click(function() {
		$(this).siblings().removeClass("selectde");
		$(this).addClass("selectde");
	});
	$(document).ready(function() {
		var showproduct = {
			"boxid": "showbox",
			"sumid": "showsum",
			"boxw": 380, //宽度,该版本中请把宽高填写成一样
			"boxh": 380, //高度,该版本中请把宽高填写成一样
			"sumw": 60, //列表每个宽度,该版本中请把宽高填写成一样
			"sumh": 60, //列表每个高度,该版本中请把宽高填写成一样
			"sumi": 7, //列表间隔
			"sums": 5, //列表显示个数
			"sumsel": "sel",
			"sumborder": 1, //列表边框，没有边框填写0，边框在css中修改
			"lastid": "showlast",
			"nextid": "shownext"
		}; //参数定义	  
		$.ljsGlasses.pcGlasses(showproduct); //方法调用，务必在加载完后执行
	});
	//侧边轮播图
	TouchSlide({
		slideCell: "#lbshou_slide",
		titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell: ".bd ul",
		effect: "leftLoop",
		prevCell: ".prev",
		nextCell: ".next",
		autoPlay: false, //自动播放
		autoPage: "<li></li>", //自动分页
	});
	var flag = 1;
	var fla = 1;
	var $length = $(".zhedie_table tr").length;
	$(".click_sty").on("click", function() {
		var $that = $(this);
		var $icon = $that.find("i");
		if(flag == 1) {
			$icon.removeClass("fa-angle-down");
			$icon.addClass("fa-angle-up");
			if($length > 3) {
				$(".zhedie_table tr").slice(3).slideUp(0);
			}
			flag = 2;
		} else if(flag == 2) {
			$icon.removeClass("fa-angle-up");
			$icon.addClass("fa-angle-down");
			$(".zhedie_table tr").slideDown(0);
			flag = 1;
		}
	});
	if($length > 3) {
		$(".click_sty").trigger("click");
	} else if($length <= 3) {
		$(".click_sty").hide();
	};
	//请选择收货地址
	$(".endaddrs").on("click", function(e) {
		
		var $tha = $(this);
		var $ico = $tha.find("i");
		console.log(fla);
		var ev = e || window.event;        
		if(ev.stopPropagation) {            
			ev.stopPropagation();        
		}        
		else if(window.event) {            
			window.event.cancelBubble = true; //兼容IE      
		}
		if(fla == 1) {
			$ico.removeClass("fa-angle-down");
			$ico.addClass("fa-angle-up");
			$(".togg_disablebox").show();
			fla = 2;
		} else if(fla == 2) {
			$ico.removeClass("fa-angle-up");
			$ico.addClass("fa-angle-down");
			$(".togg_disablebox").hide();
			fla = 1;
		}
	});
	//地址选择
	$(".city_chajian li").hover(function() {
		$(this).find("a").addClass("addcolorclass");
	}, function() {
		$(this).find("a").removeClass("addcolorclass");
	});

	$(".city_chajian li").on("click", function() {
		$(".city_chajian li a").css("color", "#333").css("font-weight", "normal");
		$(this).find("a").css("color", "#eb5151").css("font-weight", "bold");
		$(".addli_divbox").remove();
		var ind = $(this).index();
		var addindex = parseInt(ind / 8) * 8 + 7;
		//addindex可能的值为7,15，23,31	
		var createadddiv = $('<div class="addli_divbox"></div>');
		var createaddspan = $('<span><a href="###">北京</a></span><span><a href="###">上海</a></span><span><a href="###">天津</a></span><span><a href="###">重庆</a></span>');
		createaddspan.appendTo(createadddiv);
		if(addindex < 31) {
			$(".city_chajian li").eq(addindex).after(createadddiv);
		} else if(addindex == 31) {
			$(".city_chajian li").last().after(createadddiv);
		};
		$(".addli_divbox span").on("click", function() {
			$(".addli_divbox span").css("background-color", "#fbeeeb");
			$(".addli_divbox span").find("a").css("color", "#333");
			$(this).css("background-color", "#eb5151");
			$(this).find("a").css("color", "#fff");
		});
	});
	
	document.onclick = function() { 
		fla = 1; 
		console.log(fla) 
		$(".togg_disablebox").hide();
		$(".endaddrs").find("i").removeClass("fa-angle-up");
		$(".endaddrs").find("i").addClass("fa-angle-down"); 
		
	}
	$(".togg_disablebox").click(function(e) {    
		var ev = e || window.event;        
		if(ev.stopPropagation) {                
			ev.stopPropagation();         
		}        
		else if(window.event) {                
			window.event.cancelBubble = true; //兼容IE      
		}
	});

})