window.zmx = {};
zmx.transitionEnd = function(dom,callback){
	if(typeof dom=="object"){
		dom.addEventListener("webkitTransitionEnd", function(){
			callback && callback();
		});
		dom.addEventListener("transitionEnd", function(){
			callback && callback();
		});
	}
};