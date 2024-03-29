window.onload = function(){
	make();
	check_locate();

	
	set_size();
	window.onresize = set_size;
	result_scrolloffset = result.offsetTop + panel.offsetTop; // to operate scroll_show's function in check_locate func

	if(window.addEventListener){
		window.addEventListener('keydown',key_check,false);
	}
	else{
		window.attachEvent('onkeydown',key_check,false);
	}

	//모바일이면 스크롤
	if( check_mobile ){
		document.documentElement.style.overflow = "auto";
		main.style.overflow = "hidden";
		main.style.height = "auto";
		main.style.webkitOverflowScrolling = "touch";
	}
	//slide_value 체크
	(function(){
		slide_value = ( scroll_value / wrap.offsetHeight ) * slider.offsetHeight;
	}());

	enableScroll();

	loading[0].style.opacity = "0";

	setTimeout(function(){
		scrollTo(0,0);
	},10);

	setTimeout(function(){
		loading[0].style.opacity = "1";
		loading[0].style.zIndex = "-10";
		loading_text = loading[0].getElementsByClassName('default')[0];
		loading_text.style.animation = "none";
		loading_text.style.WebkitAnimation = "none";
		loading_text.style.msAnimation = "none";
		loading_text.style.MozAnimation = "none";
		loading_text.style.OAnimation = "none";
	},1000);

}

function wheel(e) {
	if( !check_mobile ){
		var e = window.event || e;
		var delta = (e.wheelDelta || -e.deltaY || -e.detail);

		if( delta < 0 ){
			soft_move(1);
		}
		else{
			soft_move(0);
		}
		
	}
		return false;
}

var now_slider = 0;
var scroll_value = 70;
var slide_value = 0;

var slider_opacity_handler;
function scroll_opacity(){	
	// 사이드 스크롤바
	clearTimeout(slider_opacity_handler);
	slider.style.opacity = 1;
	slider_opacity_handler = setTimeout(function(){
		slider.style.opacity = 0;
	},1000);
}
var wrap_scrollTop = 0;
var scroll_temp;
function soft_move(direction){
	if(!check_mobile){
		scroll_opacity();
	}
	if(direction){
		/*for( var i = 0 ; i < scroll_value; i++){
			setTimeout(function(i){
				wrap.scrollTop++;
			},5*i);
		}*/
		if( wrap_scrollTop + scroll_temp< wrap.scrollHeight - main.offsetHeight ){
			wrap_scrollTop += scroll_temp;
		}
		else{
			wrap_scrollTop = wrap.scrollHeight - main.offsetHeight
		}
	}
	else{
		/*for( var i = 0 ; i < scroll_value; i++){
			setTimeout(function(){
				wrap.scrollTop--;
			},5*i);
		}*/
		if( wrap_scrollTop - scroll_temp > 0 ){
			wrap_scrollTop -= scroll_temp;
		}
		else{
			wrap_scrollTop = 0;
		}
	}
	wrap.style.WebkitTransform = "translateY("+ (-wrap_scrollTop)+"px)";
	wrap.style.MozTransform = "translateY("+ (-wrap_scrollTop)+"px)";
	wrap.style.msTransform = "translateY("+ (-wrap_scrollTop)+"px)";
	wrap.style.OTransform = "translateY("+ (-wrap_scrollTop)+"px)";
	wrap.style.transform = "translateY("+ (-wrap_scrollTop)+"px)";
}

var keys = {32: 1, 33: 1, 34: 1, 35: 1, 36:1, 38: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault){
      e.preventDefault();
  }
  e.returnValue = false;  
}
function preventDefaultForScrollKeys(e) {
	var keyCode = (window.event) ? e.keyCode : e.keywhich;
    if (keys[keyCode]) {
        preventDefault(e);
        return false;
    }
}
function setNewScroll(e){
	var keyCode = (window.event) ? e.keyCode : e.keywhich;
	switch(keyCode){
		case 33 /*pageup*/	: for(var i=0;i<4;i++) soft_move(0); break;
		case 34 /*pagedown*/: for(var i=0;i<4;i++) soft_move(1); break;
		
		case 32 /*spacebar*/:
		case 35 /*end*/		: 
		case 40 /*DOWNarrow*/: soft_move(1);  break;
		
		case 36 /*home*/	:
		case 38 /*UParrow*/: soft_move(0); break;
	}
	return false;
}
function disableScroll() {
	if( !check_mobile){
		if (main.addEventListener){
			main.removeEventListener("DOMMouseScroll", wheel, false);
			main.removeEventListener("mousewheel", wheel, false);

			main.addEventListener('DOMMouseScroll', preventDefault, false);
			main.addEventListener('mousewheel', preventDefault, false);
		}
		else{
			//main.detachEvent('onmousewheel',wheel,false);
			//main.attachEvent('onmousewheel',preventDefault,false);
		}

		main.onwheel = preventDefault;
		//main.onmousewheel = preventDefault;
		if(main.removeEventListener){
			main.addEventListener('touchmove', preventDefault, false);

			main.removeEventListener('touchmove',wheel,false);
		}
		else{
			//main.attachEvent('ontouchmove',preventDefault,false);

			//main.detachEvent('ontouchmove',wheel,false);
		}
	}
	else{
		document.documentElement.style.overflow = "hidden";
	}
	main.ontouchmove  = preventDefault;
}
//disableScroll();
function enableScroll(){
	if( !check_mobile ){
		if (main.addEventListener) {
			main.removeEventListener("mousewheel", preventDefault, false);
			main.removeEventListener('DOMMouseScroll',preventDefault,false);

			main.addEventListener("mousewheel", wheel, false);
			main.addEventListener("DOMMouseScroll", wheel, false);;
		}
		else{
			//main.detachEvent('onmousewheel',preventDefault,false);	
			//main.attachEvent("onmousewheel", wheel,false);
		}
		main.onwheel = wheel;
		//main.onmousewheel = wheel;

		if(main.removeEventListener){
			main.removeEventListener('touchmove', preventDefault, false);

			main.addEventListener('touchmove',wheel,false);
		}
		else{
			//main.detachEvent('ontouchmove',preventDefault,false);

			//main.attachEvent('ontouchmove',wheel,false);
		}
	}
	else{
		document.documentElement.style.overflow = "auto";
	}
	main.ontouchmove  = null;
}










var result_scrolloffset;

function check_locate(){
	setInterval(function(){
		if(!check_mobile){
			if( Top_() < panel.offsetTop ){
				top_page.style.backgroundPosition = "0 "+ Top_()/2+ "px";
			}
		}
		
		if(Top_() >= (top_page.offsetHeight - header.offsetHeight) ){
			header.style.opacity = 1;
			header.style.zIndex = 10000;
			header.style.top = 0;
		}
		else{
				header.style.opacity = 0;
				header.style.zIndex = -1;
				header.style.top = -header.offsetHeight + "px";
		}
		
		if( !check_mobile){
			// 사이드 스크롤바
			now_slider = ( (wrap_scrollTop/( wrap.scrollHeight- main.offsetHeight )) * (slider.offsetHeight-slider_btn.offsetHeight) );
			slider_btn.style.transform = "translate(0,"+ now_slider +"px)";
			slider_btn.style.WebkitTransform = "translate(0,"+ now_slider +"px)";
			slider_btn.style.msTransform = "translate(0,"+ now_slider +"px)";
			slider_btn.style.MozTransform = "translate(0,"+ now_slider +"px)";
			slider_btn.style.OTransform = "translate(0,"+ now_slider +"px)";
		}
		else{
			slider.style.zIndex = "-20";
		}
	},10)
}


var mobileKeyWords = new Array('Android', 'iPhone', 'iPod' , 'iPad', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
var check_mobile = 0;
for (var info in mobileKeyWords){
    if (navigator.userAgent.match(mobileKeyWords[info]) != null){
    	check_mobile = 1;
        break;
    }
}

var ua = (	window.navigator.userAgent.toLowerCase().indexOf('applewebkit') != -1 ||
			window.navigator.userAgent.toLowerCase().indexOf('chrome') != -1 ||
			window.navigator.userAgent.toLowerCase().indexOf('safari') != -1
		 ) ? 1 : 0;
var Top;
function Top_(){
	if( check_mobile ){
		Top = document.body.scrollTop || document.documentElement.scrollTop;
	}
	else{
		Top = wrap_scrollTop;
	}
	return Top;
}





function set_size(){
	var temp = window.innerHeight || document.documentElement.clientHeight;
	

	top_page.style.height = temp + "px";
	top_text.style.marginTop = ( top_page.offsetHeight - top_text.offsetHeight )/2 + "px";

	scroll_temp = main.offsetHeight / 4;
	slider.style.height = window.innerHeight / 100 * 98 +"px";

	if( check_menu_state ){
		main.style.transform= "translateX("+(-nav.offsetWidth)+"px)";
		main.style.WebkitTransform= "translateX("+(-nav.offsetWidth)+"px)";
		main.style.MozTransform= "translateX("+(-nav.offsetWidth)+"px)";
		main.style.msTransform= "translateX("+(-nav.offsetWidth)+"px)";
		main.style.OTransform= "translateX("+(-nav.offsetWidth)+"px)";

		nav.style.zIndex = "0";
		nav.style.transform = "translateX(0)";
		nav.style.WebkitTransform = "translateX(0)";
		nav.style.MozTransform = "translateX(0)";
		nav.style.msTransform = "translateX(0)";
		nav.style.OTransform = "translateX(0)";

		header.style.transform = "translateX("+(-nav.offsetWidth)+"px)";
		header.style.WebkitTransform = "translateX("+(-nav.offsetWidth)+"px)";
		header.style.MozTransform = "translateX("+(-nav.offsetWidth)+"px)";
		header.style.msTransform = "translateX("+(-nav.offsetWidth)+"px)";
		header.style.OTransform = "translateX("+(-nav.offsetWidth)+"px)";
	}
	else{
		main.style.transform = "translateX(0)";
		main.style.WebkitTransform = "translateX(0)";
		main.style.MozTransform = "translateX(0)";
		main.style.msTransform = "translateX(0)";
		main.style.OTransform = "translateX(0)";
		
		setTimeout(function(){nav.style.zIndex = "-100";},300);
		nav.style.transform = "translateX(5em)";
		nav.style.WebkitTransform = "translateX(5em)";
		nav.style.MozTransform = "translateX(5em)";
		nav.style.msTransform = "translateX(5em)";
		nav.style.OTransform = "translateX(5em)";

		header.style.transform = "translateX(0)";
		header.style.WebkitTransform = "translateX(0)";
		header.style.MozTransform = "translateX(0)";
		header.style.msTransform = "translateX(0)";
		header.style.OTransform = "translateX(0)";
	}
};