window.onload = function(){
	banner();
};
function banner(){
	var banner = document.getElementsByClassName('zb_banner')[0];
	var imageBox = banner.getElementsByTagName("ul")[0];
	var pointBox = banner.getElementsByTagName("ul")[1];
	var points = pointBox.getElementsByTagName("li");

	var width =banner.offsetWidth;

	var addTransition = function(){
		imageBox.style.webkitTransition = "all 0.2s ";
		imageBox.style.transition = "all 0.2s ";
	};
	var removeTransition = function(){
		imageBox.style.webkitTransition = "none ";
		imageBox.style.transition = "none ";
	};
	var setTranslateX = function(x){
		imageBox.style.webkitTransform = "translateX("+x+"px)";
		imageBox.style.transform = "translateX("+x+"px)";
	};
	var setpoint = function(index){
		for (var i = 0; i <points.length; i++) {
			points[i].className="";
		}
		points[index-1].className="now";
	};

	var index = 1;
	var timer=setInterval(function(){
		index++;
		addTransition();
		setTranslateX(-index*width);
	},2000);

	zmx.transitionEnd(imageBox,function(){
		if(index>=7){
			index=1;
			removeTransition();
			setTranslateX(-index*width);
		}else if(index<=0){
			index=6;
			removeTransition();
			setTranslateX(-index*width);
		}
		setpoint(index);
	});


	var startX = 0;
	var moveX = 0;
	var lineX = 0;
	var ismove = false;
	imageBox.addEventListener("touchstart", function(e){
		startX = e.touches[0].clientX;
		clearInterval(timer);
	});
	imageBox.addEventListener("touchmove", function(e){
		moveX = e.touches[0].clientX;
		lineX = moveX - startX;
		//console.log(lineX);
		removeTransition();
		setTranslateX(-index*width+lineX);
		ismove = true;
	});
	window.addEventListener("touchend",function(e){//方便你模拟器上模拟
		if(Math.abs(lineX) > (width/3) && ismove){
			if(lineX > 0){
				index --;
			}else{
				index ++;
			}
			addTransition();
			setTranslateX(-index * width);
		 }else{
			addTransition();
			setTranslateX(-index*width);
		 }
		
		 startX = 0;
		 moveX = 0;
		 lineX = 0;
		 ismove = false;

		clearInterval(timer);
		timer=setInterval(function(){
		index ++;
		addTransition();
		setTranslateX(-index*width);
	},2000);
	});
}





















