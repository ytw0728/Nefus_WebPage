function make(){
	ingredient();

	main_text_handle = new top_page_text;
	main_text_handle.set_text();
	main_text_handle.auto_text();

	var a = new paint_bart;
	a.start_paint();

	set_move_event();
}

var color_array = ["#86a3dd","#40bff5","#ef7c6b","#70d38b","#ffc640"];

var loading;
var main;
var slider;
var slider_btn;
var wrap;
var header;
var top_page;
var top_text;
var main_text;
var main_text_handle;
var panel;
var css_pic;
var nav;
var page_link_label;


var click_to_move_0;
var click_to_move_1;
var click_to_move_2;
var focus_pages;

var user;
var login;



function ingredient(){
	if(!document.getElementsByClassName){
		document.getElementsByClassName = function(classname){
			return document.querySelectorAll("." + classname);
		}
	}
	loading = document.getElementsByClassName('loading');
	wrap = document.getElementsByTagName("wrap")[0];
	main = document.getElementById('main');
	slider = document.getElementById('slider');
	slider_btn = document.getElementById('slider_btn');
	header = document.getElementsByTagName("header")[0];
	top_page = document.getElementById("top_page");
	top_text = document.getElementsByClassName('top_text')[0];
	main_text = document.getElementById("main_text");
	panel = document.getElementById("panel");
	css_pic = document.getElementById("css_pic");
	nav = document.getElementsByTagName("nav")[0];



	click_to_move_0 = document.getElementsByClassName("click_to_move_0");
	click_to_move_1 = document.getElementsByClassName("click_to_move_1");
	click_to_move_2 = document.getElementsByClassName("click_to_move_2");
	focus_pages = document.getElementsByClassName('focus_pages');

	if( document.getElementsByClassName('user').length ){
		user = document.getElementsByClassName('user');
		var random_index = Math.floor(Math.random()*10) % color_array.length;
		user[0].style.background = color_array[random_index];
		//user[0].onclick = logout;
	}
	if(document.getElementById('login')){
		login = document.getElementById('login');
		//login.onclick = login_page;
	}

	page_link_label = document.getElementsByClassName('page_link_label');
		var label_color;
		if(!check_mobile)	label_color = "transparent";
		else 				label_color = "#ccc";
		for(var i = 0 ; i < page_link_label.length; i++){
			page_link_label[i].style.color = label_color;
		}
}

function top_page_text(){
	var texts = Array();
	texts.push("편하고 활발한 소통이 이뤄지고 있습니다.");
	texts.push("다양한 실장비가 준비되어 있어요.");
	texts.push("특별한. 체계적인 커리큘럼.");

	this.set_text = function(){
		main_text.innerHTML = texts[text_cnt];
	}
	var text_cnt = 0;
	var auto;
	this.auto_text = function(){
		clearInterval(auto);
		auto = setInterval(function(){
			text_cnt = (text_cnt+1)%3;
			main_text.innerHTML = texts[text_cnt];
			main_text_opacity = 0;
			show_text();
		},5000)
	}
	this.next_text = function(){
		text_cnt = (text_cnt + 1 )%3;
		main_text.innerHTML = texts[text_cnt];
		main_text_opacity = 0;
		show_text();
		this.auto_text();
	}
	var main_text_opacity = 0;
	var show_text_handler;
	function show_text(){
		if( main_text_opacity <=  1 ){
			main_text_opacity += 0.01;
			main_text.style.opacity = main_text_opacity;
			clearTimeout( show_text_handler );
			show_text_handler = setTimeout( show_text , 10 );
		}
		else clearTimeout( show_text_handler );
	}
}




function main_text_event(){
	main_text_handle.next_text();
}
function paint_bart(){
	var content = css_pic.innerHTML;
	var t = content.split("</div>");
	var temp = "";

	var start_paint_handler;
	this.start_paint = function(){
		paint();
		clearInterval(start_paint_handler);
		start_paint_handler = setInterval( function(){
			css_pic.innerHTML = "";
			temp = "";
			i = 0;
			paint();
		} ,20000);
	}

	var paint_handler;
	var i = 0;
	function paint(){ 	
		if( i != t.length){
			temp += t[i++] + "</div>";
			css_pic.innerHTML = temp;
			clearTimeout( paint_handler );
			paint_handler = setTimeout( paint , 50 );
		}
		else{
			clearTimeout( paint_handler);
		}
	}
}

var check_menu_state = 0;
function show_menubar(){
	disableScroll();
	check_menu_state = 1;
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
	
	setTimeout(function(){
		if(window.addEventListener){
			main.addEventListener("click",unshow_menubar);
		}
		else{
			main.attachEvent('onclick',unshow_menubar);
		}
	},800);

};

function unshow_menubar(){
	check_menu_state = 0;
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

	setTimeout(function(){ enableScroll(); },500);
	main.removeEventListener("click",unshow_menubar);
}




function set_move_event(){
	for(var i = 0; i < click_to_move_0.length; i++){
		if( window.addEventListener){
			click_to_move_0[i].addEventListener("click",(function(i){
				return function(){
					now_offset = Top_();
					page_offset = panel.offsetTop + focus_pages[i].offsetTop - header.offsetHeight;
					move_to_page();
			}
			}(i)) );
			click_to_move_1[i].addEventListener("click",(function(i){
				return function(){
					now_offset = Top_();
					page_offset = panel.offsetTop + focus_pages[i].offsetTop - header.offsetHeight;
					move_to_page();
				}
			}(i)) );
			click_to_move_2[i].addEventListener("click",(function(i){
				return function(){
					now_offset = Top_();
					page_offset = panel.offsetTop + focus_pages[i].offsetTop - header.offsetHeight;
					move_to_page();
				}
			}(i)));
		}
		else{
			click_to_move_0[i].attachEvent("onclick",(function(i){
				return function(){
					now_offset = Top_();
					page_offset = panel.offsetTop + focus_pages[i].offsetTop - header.offsetHeight;
					move_to_page();
			}
			}(i)) );
			click_to_move_1[i].attachEvent("onclick",(function(i){
				return function(){
					now_offset = Top_();
					page_offset = panel.offsetTop + focus_pages[i].offsetTop - header.offsetHeight;
					move_to_page();
				}
			}(i)) );
			click_to_move_2[i].attachEvent("onclick",(function(i){
				return function(){
					now_offset = Top_();
					page_offset = panel.offsetTop + focus_pages[i].offsetTop - header.offsetHeight;
					move_to_page();
				}
			}(i)));
		}
		
		
	}
}

var now_offset = 0;
var page_offset = 0;
var soft = 1;
function move_to_page(){
	if( check_mobile ){
		if( soft <= 10){
			document.body.scrollTop = ( page_offset - now_offset )/10*soft++ + now_offset;
			setTimeout(move_to_page , 20);
		}
		else{
			soft = 1;
		}
	}
	else{
		if( page_offset > wrap.scrollHeight - main.offsetHeight ) page_offset = wrap.scrollHeight - main.offsetHeight;
		wrap.style.WebkitTransform = "translateY("+ (-page_offset)+"px)";
		wrap.style.MozTransform = "translateY("+ (-page_offset)+"px)";
		wrap.style.msTransform = "translateY("+ (-page_offset)+"px)";
		wrap.style.OTransform = "translateY("+ (-page_offset)+"px)";
		wrap.style.transform = "translateY("+ (-page_offset)+"px)";

		wrap_scrollTop = page_offset;
	}
}


function to_top(){
	if(check_mobile){
		document.body.scrollTop = 0;
	}
	wrap.style.WebkitTransform = "translateY(0px)";
	wrap.style.MozTransform = "translateY(0px)";
	wrap.style.msTransform = "translateY(0px)";
	wrap.style.OTransform = "translateY(0px)";
	wrap.style.transform = "translateY(0px)";
	wrap_scrollTop = 0;
}




function login_page(){
	if( confirm('로그인 혹은 회원가입 하시겠습니까?')){
			window.location.href = '/main/login';
	}
}
function logout(){
	if( confirm('로그아웃 하시겠습니까?')){
		window.location.href = '/auth/logout';
	}
}

var dodge;
var key = "";
function key_check(e){
	setNewScroll(e);
	key += String.fromCharCode(e.keyCode);
	if(key.length <= 200){
		if( key.indexOf('SHOWMETHEGAME') != -1){
			dodge = window.open("/main/dodge_game","_blank");
			setTimeout(function(){
				for(var i = 0 ; i<94; i++){
					dodge.alert('Congratuation! \n\n' + i + '\n');
				}
			},300);
			key = "";
		}
	}
	else{
		key = "";
	}
}