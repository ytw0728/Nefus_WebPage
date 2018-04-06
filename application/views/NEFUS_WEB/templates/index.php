<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<?php
	if( $this->session->userdata('returnURL') ){
		$this->session->unset_userdata('returnURL');
	}
?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset = "utf-8" />
	<meta name="keywords" content="네퓨즈 NEFUS nefus 선린인터넷고등학교 선린인터넷고 정보통신과" />
	<meta name="description" content="선린인터넷고등학교 정보통신과 전문동아리 네퓨즈입니다." />

	<meta name = "viewport" content ="width=device-width, initial-scale=1.0,  target-densitydpi=medium-dpi" />
	<meta name="theme-color" content="white"/>
	<meta name="mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<link rel="apple-touch-icon" href="/static/pics/logo/favicon.ico"/>
	<link rel="shortcut icon" type="image/x-icon" href="/static/pics/logo/favicon.ico" /> <!--  파비콘을 만드세요! -->


	<title> NEFUS </title>
<!--mediaquery-->
<!-- <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script> -->

<!--mediaquery-->


<!--[if lte IE 8]>
<div style = 'display: block; position: fixed; width: 100%; height: 100%; background: #222222; z-index:99999; color: white; font-size:1.5em'>
	자동으로 구형 브라우저 안내 페이지로이동합니다.
</div>
<meta http-equiv="refresh" content="0; url=/main/notice"/>
<![endif]-->

<!-- START script-->
<script type = "text/javascript" charset = "utf-8" src = "/static/js/index_routine.js"></script>
<script type = "text/javascript" charset = "utf-8" src = "/static/js/index_make.js"></script>
<script type = "text/javascript" charset = "utf-8" src = "/static/js/css3-mediaqueries-js.google.js"></script>
<!-- END script -->


<!-- START style -->
<link type = "text/css"  rel = " stylesheet" charset = "utf-8" href = "/static/css/index_style.css" />
<link type = "text/css" rel = "stylesheet" charset = "utf-8" href = "/static/css/index_font.css" />
<link type = "text/css" rel = "stylesheet" charset = "utf-8" href = "/static/css/index_bart.css"/>
<link type = "text/css" rel = "stylesheet" charset = "utf-8" href = "/static/css/index_animation.css"/>
<link type = "text/css" rel = "stylesheet" charset = "utf-8" href = "/static/css/index_media.css"/>
<link type = "text/css" rel = "stylesheet" charset = "utf-8" href = "/static/css/font_awesome/css/font-awesome.css"/>

<!--END style -->
</head>
<body>
<header class = "main_header">
	<span class = "header_logo">
		<a onclick = "to_top();"><img src = "/static/pics/logo/logo_top.png"  alt ="환영합니다"></a>
	</span>
	<span class = "header_menu">
		<ul class = "menus">
			<li class = "menu click_to_move_0"><a class = 'menu_link'>동아리 소개</a></li>	
			<li class = "menu click_to_move_0"><a class = 'menu_link'>최근 실적</a></li>
			<li class = "menu click_to_move_0"><a class = 'menu_link'>동아리 지원</a></li>
			<li class = "mobile mobile_menu"><a class = "fa fa-bars fa-2x" onclick="show_menubar();"></a></li>
		</ul>
	</span>
</header>
<container id = 'main'>
<div id = 'slider'>
	<div id = 'slider_btn'>
	</div>
</div>
<wrap>
	<div id = "top_page">
		<div class = "top_text_box">
			<p class = 'top_text'title = 'SHOWMETHEGAME 을 입력해보세요'>
				NEFUS
				<span>Network Focus</span>
			</p>
		</div>
		<div class = "top_header">
			<span class = "top_header_menubox">
				<ul class = "menus">
					<li class="menu click_to_move_1"><a class = 'menu_link'>동아리 소개</a></li>	
					<li class="menu click_to_move_1"><a class = 'menu_link'>최근 실적</a></li>
					<li class="menu click_to_move_1"><a class = 'menu_link'>동아리 지원</a></li>
					<li class = "mobile mobile_menu"><a class = "fa fa-bars fa-2x" onclick="show_menubar();"></a></li>
				</ul>
			</span>
		</div>
	</div>
	<div id = "panel">
		<div id = "welcome_card" >
			<div id = "css_pic" title = "With https://github.com/pattle/simpsons-in-css/blob/master/css/bart.css" > 
				<div id="bart" >
					<div class="head">
						<div class="no-border body hair hair1"></div>
						<div class="no-border body hair hair2"></div>
						<div class="no-border body hair hair3"></div>
						<div class="no-border body hair hair4"></div>
						<div class="no-border body hair hair5"></div>
						<div class="no-border body hair hair6"></div>
						<div class="no-border body hair hair7"></div>
						<div class="no-border body hair hair8"></div>
						<div class="no-border body hair hair9"></div>
						<div class="body mouth-lip2"></div>
						<div class="no-border body head-left1"></div>
						<div class="no-border body head-left2"></div>
						<div class="no-border body head-left3"></div>
						<div class="no-border body head-left4"></div>
						<div class="no-border body head-left5"></div>
						<div class="no-border body head-left6"></div>
						<div class="no-border body head-left7"></div>
						<div class="body eyelid"></div>
						<div class="no-border body mouth"></div>
						<div class="body mouth-lip"></div>
						<div class="no-border body head-right2"></div>
						<div class="no-border body head-right1"></div>
						<div class="no-border body head-right3"></div>

						<!-- The ear -->
						<div class="body ear">
							<div class="no-border inner1"></div>
							<div class="no-border inner2"></div>
							<div class="no-border body clip"></div>
						</div>

						<!-- The right eye -->
						<div class="right-eye">
							<div class="no-border right-eye-pupil"></div>
							<div class="no-border body eyelid-top"></div>
							<div class="no-border body eyelid-bottom"></div>
						</div>

						<!-- The nose -->
						<div class="no-border body nose"></div>
						<div class="body nose-tip"></div>

						<!-- The left eye -->
						<div class="left-eye">
							<div class="no-border left-eye-pupil"></div>
							<div class="no-border body eyelid-top"></div>
							<div class="no-border body eyelid-bottom"></div>
						</div>

						<div class="no-border mouth-smile"></div>
					</div>
				</div>
			</div>
			<span>Welcome to NEFUS' Website!</span>
		</div>
		<div id = "info" class = "focus_pages">
			<span class = "title title_1">동아리 소개</span>
			<div class ="animation_text" >

				<p id = "main_text" onclick = "main_text_event()" title = "글자를 클릭해보세요!">
					The Main Page<Br/>
					알맞은 글귀를 만듭시다.
				</p>
			</div>
			<article>
				<p>					
					NEFUS는 네트워크 IoT 동아리로서, 2003년에 처음 시작한 선린인터넷고등학교 전문 동아리입니다. 특유의 선,후배 사이 끈끈한 인적 네트워크를 기반으로 네트워크, 개발 등을 포함한 다양한 분야의 노하우를 주고받으며 공부하고 있습니다. 
				</p>
				<container class = "curriculum">
					<span class = 'sub_title_2'>
						커리큘럼 <span class = 'small_2'>|</span>
					</span>
					<ul>
						<li>C 기초</li>
						<li>알고리즘</li>
						<li>아두이노</li>
						<li>라즈베리파이 활용</li>
						<li>웹, 앱 개발</li>
						<li>특강(Unity, 보안, 서버, 네트워크, Ruby, Python, C++, C# 등)</li>
					</ul>
				</container>
				<container class = "iot_info">
					<span class = 'sub_title_2'>
						IoT 란? <span class = 'small_2'>|</span>
					</span>
					<p>
						IoT 란 Internet Of Things 의 약어로, 사물 인터넷을 뜻합니다. 사물 인터넷은 각종 사물에 센서와 통신 기능을 내장하여 인터넷에 연결하는 기술입니다. 가트너 리포트에 따르면, 2015년 기준 약 49억개의 사물들이 인터넷과 연결되어 있다고 하며, Cisco 사는 2020년 사물인터넷의 전망을 500억개로 내다보고 있습니다. 현재 사물인터넷은 높은 시장 가치를 예측하며, 관심을 집중하고 있는 분야입니다.
					</p>
					<span class = 'iot_link'>
						IoT에 대한 더 많은 정보를 원하신다면? <a href = "/main/hyowon" target = "_blank">Link!</a>
					</span>
				</container>
				<container class = "qna">
					<span class = 'sub_title_2'>
						QnA <span class = 'small_2'>|</span>
					</span>
					<ul>
						<li>
							<span class = 'questions'>
								Q. 전공을 못하는데 괜찮은가요?
							</span>
							<span class = 'answers'>
								A. 선린의 모든 동아리가 그렇 듯 저희도 네퓨즈에 처음 들어올 때, 입학부터 전공에 실력이 있는 친구들도 있었지만 그렇지 않은 친구들이 더 많았습니다. 아직 전공이 낯선 친구들도 쉽게 이해하고 따라할 수 있는 다양한 커리큘럼들을 준비했습니다. 신입생 여러분들, 걱정하지 마시고 자신있게 NEFUS에 들어오셔서 NEFUS를 빛내주세요.
							</span>
						</li>
						<li>
							<span class = 'questions'>
								Q. 모집학과는 어떻게 되나요?
							</span>
							<span class = 'answers'>
								A. NEFUS에 관심있으신 정보통신과, 웹운영과 학생분들은 모두 지원하실 수 있습니다.
							</span>
						</li>
					</ul>
				</container>
			</article>
		</div>
		<div id = "result" class = "focus_pages">
			<span class = "title title_2">최근 실적</span>
			<article>
				<section class = "result_2015">
					<container class = 'prize prize_2015'>
							<span class = 'sub_title'>
								수상 실적  <span class = 'small'>| 2015</span>
							</span>

							<div class = 'in_school'>
								<span>
									교내
								</span>
								<ul>
									<li>교내 정보올림피아드 경진대회 금상</li>
									<li>교내 정보올림피아드 경진대회 동상</li>
									<li>교내 해킹방어대회 동상</li>
									<li>선린 해커톤 은상</li>
									<li>선린 해커톤 기업 특별상 ( 스포카 )</li>
									<li>선린 해커톤 기업 특별상 ( 스킬트리랩 )</li>
									<li>디지털 콘텐츠 미디어 경진대회 웹 부문 동상</li>
									<li>디지털 콘텐츠 미디어 경진대회 웹 부문 동상</li>
									<li>교내 네트워크 구축 대회 금상(1등)</li>
									<li>교내 네트워크 구축 대회 은상(2등)</li>
									<li>교내 네트워크 구축 대회 동상(4등)</li>
									<li>교내 독서 PT 대회 은상</li>
								</ul>
							</div>
							<div class = 'out_school'>
								<span>
									교외
								</span>
								<ul>
									<li>행복한 과학기술 공모전 대상 ( 미래창조과학부 장관상 )</li>
									<li>한국 정보올림피아드 전국대회 경시부문 장려상</li>
									<li>서울시 정보올림피아드 경시대회 은상</li>
									<li>제 1회 대한민국 SW 융합 소프트웨어 해커톤 ( 경기과학기술진흥원장 상 )</li>
									<li>시스코 네트워크 스킬 경진대회 우수상</li>
									<li>시스코 네트워크 스킬 경진대회 동상</li>
									<li>Smart Teen App Challenge 가작상</li>
								</ul>
							</div>
					</container>
					<container class = "other_result other_result_2015">
						<span class = 'sub_title'>
							기타 <span class = 'small'>| 2015</span>
						</span>
						<div class = "activities">
							<span>
								활동
							</span>
							<ul>
								<li>차세대 보안 리더 Best Of the Best 4기</li>
								<li>서울 진로 직업 체험 박람회 부스 운영</li>
								<li>숙련 기술 진흥원 IT/System/Network 교육</li>
								<li>2015 사물인터넷(IoT) 전시회 견학</li>
								<li>네트워크 구축 문제 출제</li>
							</ul>
						</div>
						<div class = "course">
							<span>
								진학 및 취업
							</span>
							<ul>
								<li>KT DS 취업</li>
								<li>서울 메트로 취업</li>
								<li>한양 대학교 컴퓨터 공학과 입학</li>
								<li>이화 여자 대학교 입학</li>
							</ul>
						</div>
					</container>
				</section>
				<section class = "result_2014">
					<container class = 'prize prize_2014'>
							<span class = 'sub_title'>
								수상 실적  <span class = 'small'>| 2014</span>
							</span>
							<div class = 'in_school'>
								<ul>
									<li>교내 네트워크 구축대회 금상</li>
									<li>교내 네트워크 구축대회 은상</li>
									<li>교내 네트워크 구축대회 동상</li>
									<li>시스코 아카데미 경진대회 금상</li>
									<li>시스코 아카데미 경진대회 은상</li>
									<li>시스코 아카데미 경진대회 동상</li>
									<li>디지털 콘텐츠 경진대회 금상</li>
									<li>디지털 콘텐츠 경진대회 장려상</li>
									<li>교내 해킹 방어대회 동상</li>
									<li>모바일 콘텐츠 경진대회 동상</li>
								</ul>
							</div>
							<div class = 'out_school' >
								<ul>
									<li>지방 기능 경기대회 동상</li>
									<li>성결대학교 전국정보과학경시대회 네트워크보안 프로그래밍 금상</li>
									<li>ICT 창의성 경진대회 은상</li>
									<li>한국 대학생 ICT경진대회 장려상</li>
								</ul>
							</div>
					</container>
					<container class = "other_result other_result_2014">
						<span class = 'sub_title'>
							기타 <span class = 'small'>| 2014</span>
						</span>
						<div class = "course">
							<span>
								취업
							</span>
							<ul>
								<li>금융 감독원</li>
								<li>삼성 에스원</li>
								<li>KT DS</li>
								<li>트루네트웍스</li>
								<li>Cnt tech</li>
								<li>닷네임 코리아</li>
								<li>와치텍</li>
							</ul>
						</div>
						<div>
							<span>
								이 외 14년 자료 실종.
							</span>
						</div>
					</container>
				</section>
			</article>
		</div>
		<div id = "apply" class = "focus_pages">
			<span class = "title title_3">동아리 지원</span>
			<article>
				<p class = 'message'>
					처음 저희가 Nefus에 들어올때도 많은 것을 몰랐던 상태에서 들어왔습니다. 학교에 적응하기에도 바빴고, 모든게 낯설었죠. 하지만 선배님들이 정말 열심히 가르쳐 주셔서 다양한 외부대회에 나가보고 친구들과 프로젝트를 하는 등 여러가지 활동을 해볼 수 있었습니다. 그로인해 저희는 뛰어난 실력을 가질 수 있었다 생각합니다. 저희 NEFUS는 네트워크라는 분야에 국한되지 않고, 매년 신입생분들이 관심가질 만한 커리큘럼을 적용시키며 발전해 나아가고 있습니다. 저희 NEFUS에 관심있으신 신입생 여러분, 많은 지원과 참여 부탁드립니다.
					<span>-13기 네퓨즈-</span>
				</p>
				<section>
					<span>
						<span class = 'sub_title_3'>지원 날짜</span>2016년 00월 00일 ~ 2016년 00월 00일까지
					</span>
					<span>
						<span class = 'sub_title_3'>시연회</span>2016년 3월 7일 월요일, 5시부터 7시까지 컴퓨터 7실에서 <span class = 'small'> ( 3호관 3층 )</span>
					</span>
					<span>
						<span class = 'sub_title_3'>면접</span>2016년 3월 15일 ~ 16일 <span class = 'small'>( 15일 1차 모집. 16일 2차 모집 )</span>
					</span>
				</section>
				<p class = 'notice'>
					해당 면접일에 타 동아리에 지원신청이 되어있지 않아야 합니다.<br/>
					만약 타 동아리와 중복 지원을 했을 경우 불이익이 있게 됩니다. 아래의 예를 참고해주세요.
					<span class = 'small'>예1) 1,2차 모집일에 타 동아리 지원이 확인된 경우 ( 불이익 대상 )</span>
					<span class = 'small'>예2) 해당 면접일 이전에 타 동아리 지원에서 떨어진 후, 네퓨즈에 지원 신청을 한 경우 ( 가능 )</span>
				</p>
				<a onclick = "javascript:alert('동아리 지원 기간이 아닙니다.')" class = "typeform_link">지원 링크</a>
			</article>
		</div>
		<footer>
			<span class = "policy no-select">
				Copyright©2015 by NEFUS ytw0728
			</span>
			<span class = "item">
				<span class = "highlight no-select">부장 : </span> 장재훈 010-9227-6853
			</span>
			<span class = "item">
				<span class = "highlight no-select">부부장 : </span> 성도현 010-6818-0359
			</span>
			<span class = "item">
				<span class = "highlight no-select">이메일 : </span> apply@nefus.kr
			</span>
			<br/>
			<span class = "item"><span class = "highlight no-select">문의 사항은 위의 연락처로 보내주시기 바랍니다.</span></span>
		</footer>
	</div>
</wrap>
</container>
<nav>
	<div class = "user_box">
		
		<?php
			if( $this->session->userdata('is_login')
			){
				$user_name_temp = $this->session->userdata('user_name');

				if( preg_match_all('/^[a-zA-Z0-9]+/', $user_name_temp) ){
					$user_name_temp = substr(strtoupper($user_name_temp),0,4);
				}
				else{
					$user_name_temp = substr($user_name_temp,0,9);
				}

		?>
			<span class = "user" onclick = 'logout();'>
				<?= $user_name_temp ?>
			</span>
		<?php
			}
			else{
		?>
			<span id = "login" onclick = 'login_page();'>
				로그인
			</span>
		<?php
			}	
		?>
		
	</div>
	<ul class = "move_menu">
		<a class = "click_to_move_2"><li class = 'menu_link'>동아리 소개</li></a>
		<a class = "click_to_move_2"><li class = 'menu_link'>최근 실적</li></a>
		<a class = "click_to_move_2"><li class = 'menu_link'>동아리 지원</li></a>
	</ul>
	<ul class = "page_links">
		<a href = '/main/guest_book' title = '방명록' class = 'page_link' id ='page_link_1' >
			<li>방명록</li>
			<label for = '#page_link_1' class = 'page_link_label'>방명록</label>
		</a>
		<a onclick = "javascript:alert('서비스 추가 중이에요!')"title = '서비스 준비 중이에요' class = 'page_link' id ='page_link_2' >
			<li>준비 중</li>
			<label for = '#page_link_2' class = 'page_link_label'>준비 중</label>
		</a>
	</ul>
</nav>
<div class = "loading">
	<p>
		<span class = "default">로딩 중 입니다...</span>
		<span class = "message">본 사이트는 자바스크립트를 실행하지 않으면 이용하실 수 없습니다.</span>
	</p>
</div>
</body>
</html>