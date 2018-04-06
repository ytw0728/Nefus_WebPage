var Width, Height;
var Short, Long;
var CenterX, CenterY, R;
var Mobile = false;

function draw()
{
	Mobile = checkMobile();
	
	setSize();
	document.getElementById('firstTop').click();
	
	init1();
}

function setSize()
{	
	Width = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;

	Height = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;
			
	Short = (Width > Height) ? Height : Width;
	Long = (Width > Height) ? Width : Height;
	
	R = Short / 6.0;
	CenterX = Width / 2.0;
	CenterY = Height / 2.0;
	
	/*
	var str = Width + " / " + Height + "\n";
	str += Short + " / " + Long + "\n";
	str += CenterX + " / " + CenterY + " / " + R;
	alert(str);
	*/
	
	document.getElementById("paint").style.width = Width + "px";
	document.getElementById("paint").style.height = Height + "px";
	
	document.getElementById("center").style.left = (CenterX - R) + "px";
	document.getElementById("center").style.top = (CenterY - R) + "px";
	document.getElementById("centerImg").width = R * 2;
	document.getElementById("centerImg").height = R * 2;
	document.getElementById("centerImg").style.cursor = "pointer";
	
	document.getElementById("hist").style.left = (CenterX - R * (5/2)) + "px";
	document.getElementById("hist").style.top = (CenterY - R * 2) + "px";
	document.getElementById("histImg").width = R;
	document.getElementById("histImg").height = R;
	
	document.getElementById("app").style.left = (CenterX - R * (5/2)) + "px";
	document.getElementById("app").style.top = (CenterY + R) + "px";
	document.getElementById("appImg").width = R;
	document.getElementById("appImg").height = R;
	
	document.getElementById("outlk").style.left = (CenterX + R * (3/2)) + "px";
	document.getElementById("outlk").style.top = (CenterY - R * 2) + "px";
	document.getElementById("outlkImg").width = R;
	document.getElementById("outlkImg").height = R;
	
	document.getElementById("dngr").style.left = (CenterX + R * (3/2)) + "px";
	document.getElementById("dngr").style.top = (CenterY + R) + "px";
	document.getElementById("dngrImg").width = R;
	document.getElementById("dngrImg").height = R;
	
	document.getElementById("texts").style.height = Height + "px";


}

function checkMobile()
{
	var mobileInfo = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
	for (var info in mobileInfo)
	{
		if (navigator.userAgent.match(mobileInfo[info]) != null)
		{
			return true;
		}
	}
	
	return true;
}

function rotRing()
{
	var ring = new Image();
	ring.src = "/static/hyowon/ring.png";
	
	var time = new Date();
	var g = document.getElementById('cCenterRot').getContext('2d');
	
	g.clearRect(-R, -R, R * 2, R * 2);
	g.rotate(0.01);
	g.drawImage(ring, -R, -R, R * 2, R * 2);
	
	if(window.requestAnimationFrame){
		window.requestAnimationFrame(rotRing);	
	}
	
}

function scrll(mvmt)
{
	if (mvmt > 0)	// Up
	{
		// document.getElementById("paint").style.top = -Height + "px";
		// document.getElementById("texts").style.marginTop = 0;

		document.getElementById("texts").scrollTop = 0;
		document.body.style.top = -Height + "px";
	}
	else			// Down
	{
		// document.getElementById("paint").style.top = 0;
		// document.getElementById("texts").style.marginTop = (Height + 20) + "px";
		document.body.style.top = "0px";
	}
}

function drawLineAni(stX, stY, dstX, dstY, tm)
{
	if (tm <= 0)
	{
		return [0, 0];
	}
	
	var mvX, mvY;
	mvX = (stX - dstX) / tm;
	mvY = (stY - dstY) / tm;
	
	var g = document.getElementById('canvas').getContext('2d');
	g.strokeStyle = "white";
	g.lineWidth = 5;
	
	g.beginPath();
	g.moveTo(stX, stY);
	g.lineTo(stX - mvX, stY - mvY);
	g.stroke();
	
	g.save();
	
	//alert((stX - mvX) + "  " + (stY - mvY));
	return [stX - mvX, stY - mvY];
}

function init1()
{
	var ckImg = document.getElementById("centerImg");
	if (ckImg.addEventListener)
	{
		ckImg.addEventListener("click", step1);
	}
	else
	{
		ckImg.attachEvent("onclick", step1);
	}
	
	
	var cCenterRot = document.getElementById('cCenterRot');
	var divCenter = document.getElementById('divCenter');
	
	divCenter.style.top = (Height / 2.0 - R * 2) + "px";
	divCenter.style.left = (Width / 2.0 - R * 2) + "px";
	
	cCenterRot.style.width = (R * 4) + "px";
	cCenterRot.width = R * 4;
	cCenterRot.style.height = (R * 4) + "px";
	cCenterRot.height = R * 4;
	
	
	var canvas = document.getElementById('canvas');
	canvas.style.width = Width + "px";
	canvas.width = Width;
	canvas.style.height = Height + "px";
	canvas.height = Height;
	
	var g = document.getElementById('cCenterRot').getContext('2d');
	g.translate(R * 2, R * 2);
	if(window.requestAnimationFrame){
		window.requestAnimationFrame(rotRing);	
	}
	
}
function step1()
{
	document.getElementById("centerLbl").innerHTML = "";
	var ckImg = document.getElementById("centerImg");
	if (ckImg.removeEventListener)
	{
		ckImg.removeEventListener("click", step1);
	}
	else
	{
		ckImg.detachEvent("onclick", step1);
	}
	
	var sx, sy;
	sx = CenterX - Math.abs(Math.cos(60)) * R;
	sy = CenterY - Math.abs(Math.sin(60)) * R;
	var mx, my;
	mx = CenterX - R * 2;
	my = CenterY - R * (2/3);
	var dx, dy;
	dx = mx;
	dy = CenterY - R;
	
	var g = document.getElementById('canvas').getContext('2d');
	g.strokeStyle = "white";
	g.lineWidth = 5;
	g.save();
	
	var tm = 60, opc = (1/30);
	var lineAni = setInterval(
		function()
		{
			if (tm >= 40)
			{
				var mvPos = drawLineAni(sx, sy, mx, my, tm - 40);
				sx = mvPos[0];
				sy = mvPos[1];
			}
			else if (tm >= 30)
			{
				var mvPos = drawLineAni(mx, my, dx, dy, tm - 30);
				mx = mvPos[0];
				my = mvPos[1];
			}
			else if (tm >= 0)
			{
				document.getElementById("histImg").style.opacity = opc;
				opc += (1/30);
			}
			else
			{
				clearInterval(lineAni);
				
				insertDoc(1);
				
				var toTop = document.getElementById("toTop");
				if (toTop.addEventListener)
				{
					toTop.addEventListener("click", scrUp1);
				}
				else
				{
					toTop.attachEvent("onclick", scrUp1);
				}
				
				scrll(1);
			}
			tm--;
		}, 25);
}
function scrUp1()
{
	scrll(-1);
	init2();
	
	var toTop = document.getElementById("toTop");
	if (toTop.removeEventListener)
	{
		toTop.removeEventListener("click", scrUp1);
	}
	else
	{
		toTop.detachEvent("onclick", scrUp1);
	}
	
	var histArc = document.getElementById("histImg");
	if (histArc.addEventListener)
	{
		histArc.addEventListener("click", function() { review(1); });
	}
	else
	{
		histArc.attachEvent("onclick", function() { review(1); });
	}
	histArc.style.cursor = "pointer";
}

function init2()
{
	document.getElementById("centerLbl").innerHTML = " ▲ Click!";
	
	var ckImg = document.getElementById("centerImg");
	if (ckImg.addEventListener)
	{
		ckImg.addEventListener("click", step2);
	}
	else
	{
		ckImg.attachEvent("onclick", step2);
	}
}
function step2()
{
	document.getElementById("centerLbl").innerHTML = "";
	var ckImg = document.getElementById("centerImg");
	if (ckImg.removeEventListener)
	{
		ckImg.removeEventListener("click", step2);
	}
	else
	{
		ckImg.detachEvent("onclick", step2);
	}
	
	var sx, sy;
	sx = CenterX - R;
	sy = CenterY;
	var mx, my;
	mx = CenterX - R * 2;
	my = CenterY
	var dx, dy;
	dx = mx;
	dy = my + R;
	
	var g = document.getElementById('canvas').getContext('2d');
	g.strokeStyle = "white";
	g.lineWidth = 5;
	g.save();
	
	var tm = 70, opc = (1/30);
	var lineAni = setInterval(
		function()
		{
			if (tm >= 50)
			{
				var mvPos = drawLineAni(sx, sy, mx, my, tm - 50);
				sx = mvPos[0];
				sy = mvPos[1];
			}
			else if (tm >= 30)
			{
				var mvPos = drawLineAni(mx, my, dx, dy, tm - 30);
				mx = mvPos[0];
				my = mvPos[1];
			}
			else if (tm >= 0)
			{
				document.getElementById("appImg").style.opacity = opc;
				opc += (1/30);
			}
			else
			{
				clearInterval(lineAni);
				
				insertDoc(2);
				
				var toTop = document.getElementById("toTop");
				if (toTop.addEventListener)
				{
					toTop.addEventListener("click", scrUp2);
				}
				else
				{
					toTop.attachEvent("onclick", scrUp2);
				}
				
				scrll(1);
			}
			tm--;
		}, 25);
}
function scrUp2()
{
	scrll(-1);
	init3();
	
	var toTop = document.getElementById("toTop");
	if (toTop.removeEventListener)
	{
		toTop.removeEventListener("click", scrUp2);
	}
	else
	{
		toTop.detachEvent("onclick", scrUp2);
	}
	
	var appArc = document.getElementById("appImg");
	if (appArc.addEventListener)
	{
		appArc.addEventListener("click", function() { review(2); });
	}
	else
	{
		appArc.attachEvent("onclick", function() { review(2); });
	}
	appArc.style.cursor = "pointer";
}

function init3()
{
	document.getElementById("centerLbl").innerHTML = " ▲ Click!";
	
	var ckImg = document.getElementById("centerImg");
	if (ckImg.addEventListener)
	{
		ckImg.addEventListener("click", step3);
	}
	else
	{
		ckImg.attachEvent("onclick", step3);
	}
}
function step3()
{
	document.getElementById("centerLbl").innerHTML = "";
	var ckImg = document.getElementById("centerImg");
	if (ckImg.removeEventListener)
	{
		ckImg.removeEventListener("click", step3);
	}
	else
	{
		ckImg.detachEvent("onclick", step3);
	}
	
	var sx, sy;
	sx = CenterX + R;
	sy = CenterY;
	var dx, dy;
	dx = CenterX + R * 2;
	dy = CenterY - R;
	
	var g = document.getElementById('canvas').getContext('2d');
	g.strokeStyle = "white";
	g.lineWidth = 5;
	g.save();
	
	var tm = 70, opc = (1/30);
	var lineAni = setInterval(
		function()
		{
			if (tm >= 50)
			{
				var mvPos = drawLineAni(sx, sy, dx, dy, tm - 50);
				sx = mvPos[0];
				sy = mvPos[1];
			}
			else if (tm >= 0)
			{
				document.getElementById("outlkImg").style.opacity = opc;
				opc += (1/30);
			}
			else
			{
				clearInterval(lineAni);
				
				insertDoc(3);
				
				var toTop = document.getElementById("toTop");
				if (toTop.addEventListener)
				{
					toTop.addEventListener("click", scrUp3);
				}
				else
				{
					toTop.attachEvent("onclick", scrUp3);
				}
				
				scrll(1);
			}
			tm--;
		}, 25);
}
function scrUp3()
{
	scrll(-1);
	init4();
	
	var toTop = document.getElementById("toTop");
	if (toTop.removeEventListener)
	{
		toTop.removeEventListener("click", scrUp3);
	}
	else
	{
		toTop.detachEvent("onclick", scrUp3);
	}
	
	var outlkArc = document.getElementById("outlkImg");
	if (outlkArc.addEventListener)
	{
		outlkArc.addEventListener("click", function() { review(3); });
	}
	else
	{
		outlkArc.attachEvent("onclick", function() { review(3); });
	}
	outlkArc.style.cursor = "pointer";
}

function init4()
{
	document.getElementById("centerLbl").innerHTML = " ▲ Click!";
	
	var ckImg = document.getElementById("centerImg");
	if (ckImg.addEventListener)
	{
		ckImg.addEventListener("click", step4);
	}
	else
	{
		ckImg.attachEvent("onclick", step4);
	}
}
function step4()
{
	document.getElementById("centerLbl").innerHTML = "";
	var ckImg = document.getElementById("centerImg");
	if (ckImg.removeEventListener)
	{
		ckImg.removeEventListener("click", step4);
	}
	else
	{
		ckImg.detachEvent("onclick", step4);
	}
	
	
	var sx, sy;
	sx = CenterX + Math.abs(Math.cos(60)) * R;
	sy = CenterY + Math.abs(Math.sin(60)) * R;
	var mx, my;
	mx = CenterX + R * 2;
	my = CenterY + R * (2/3);
	var dx, dy;
	dx = mx;
	dy = CenterY + R;
	
	var g = document.getElementById('canvas').getContext('2d');
	g.strokeStyle = "white";
	g.lineWidth = 5;
	g.save();
	
	var tm = 60, opc = (1/30);
	var lineAni = setInterval(
		function()
		{
			if (tm >= 40)
			{
				var mvPos = drawLineAni(sx, sy, mx, my, tm - 40);
				sx = mvPos[0];
				sy = mvPos[1];
			}
			else if (tm >= 30)
			{
				var mvPos = drawLineAni(mx, my, dx, dy, tm - 30);
				mx = mvPos[0];
				my = mvPos[1];
			}
			else if (tm >= 0)
			{
				document.getElementById("dngrImg").style.opacity = opc;
				opc += (1/30);
			}
			else
			{
				clearInterval(lineAni);
				
				insertDoc(4);
				
				var toTop = document.getElementById("toTop");
				if (toTop.addEventListener)
				{
					toTop.addEventListener("click", scrUp4);
				}
				else
				{
					toTop.attachEvent("onclick", scrUp4);
				}
				
				scrll(1);
			}
			tm--;
		}, 25);
}
function scrUp4()
{
	scrll(-1);
	
	var toTop = document.getElementById("toTop");
	if (toTop.removeEventListener)
	{
		toTop.removeEventListener("click", scrUp4);
	}
	else
	{
		toTop.detachEvent("onclick", scrUp4);
	}
	
	document.getElementById("centerLbl").innerHTML = "";
	document.getElementById("centerImg").style.cursor = "auto";
	
	var dngrArc = document.getElementById("dngrImg");
	if (dngrArc.addEventListener)
	{
		dngrArc.addEventListener("click", function() { review(4); });
	}
	else
	{
		dngrArc.attachEvent("onclick", function() { review(4); });
	}
	dngrArc.style.cursor = "pointer";
}

function review(index)
{
	insertDoc(index);
	
	var toTop = document.getElementById("toTop");
	if (toTop.addEventListener)
	{
		toTop.addEventListener("click", scrUpG);
	}
	else
	{
		toTop.attachEvent("onclick", scrUpG);
	}
	
	scrll(1);
}
function scrUpG()
{
	scrll(-1);
	
	var toTop = document.getElementById("toTop");
	if (toTop.removeEventListener)
	{
		toTop.removeEventListener("click", scrUpG);
	}
	else
	{
		toTop.detachEvent("onclick", scrUpG);
	}
}

function insertDoc(step)
{
	var text = "";
	switch(step)
	{
	case 1:
		document.getElementById("title").innerHTML = "역사";

		text += "<li>현재 사물 인터넷은 무선통신에서 인터넷에 이르기까지 다양한 기술의 융합으로 진화하고 있다.";
		text += " 최초의 사물 인터넷은 1982년에 카네기 멜론 대학의 콜라자판기를 인터넷에 연결하여 재고와 새로 들어온 음료가 차가운지 체크를 한 것이다.</li>";
		text += "<li>마크 와이저는 1991년에 유비쿼터스 컴퓨팅의 미래에 대해, \"21세기의 컴퓨터\"라는 학술회에서 IoT의 비전을 언급했다.";
		text += " 1994년, 레자 라지는 \"큰 공장에서 가전 제품에 이르기까지 모든 것을 자동화하는 많은 기기의 데이터\"라고 IEEE 스펙트럼의 개념을 설명했다.";
		text += " 1993년에서 1996년 사이에 여러 회사들은 Microsoft사의 at Work나 Novell사의 NEST와 같은 IoT와 유사한 솔루션을 제안했으며,";
		text += " 1999년에 이르러서 새로운 시장에 투자하기 시작했다.";
		text += " 빌 조이는 1999년에 다보스에서 열린 세계 경제 포럼에서 \"Six Webs\"라는 Device to Device(D2D)를 포함한 프레임워크를 구상했다.";
		text += "<li>IoT라는 개념은 MIT에서 1999년 발표한 자동ID센터를 분석한 간행물을 통해 널리 알려졌다.";
		text += " 또한 케빈 에쉬튼이 RFID기술을 사물 인터넷에 연결하여 일상생활의 모든 사물들에 태그가 부착될 경우 컴퓨터로 관리될 수 있음을 보였다.";
		text += " RFID 외에도 근거리 통신, 바코드, OR코드 등의 디지털 워터마킹 기술을 통해 태깅될 수 있다.</li>";
		break;
	case 2:
		document.getElementById("title").innerHTML = "활용";
		
		text += "임베디드 디바이스와의 상호작용을 통해 IoT는 거의 모든 분야에 응용이 가능해졌다.";
		text += "이러한 시스템은 일상에서 산업, 자연에 이르기까지 넓은 분야에서 정보를 수집하고 가공할 수 있다.";
		text += "<ul class = 'nolist'><li><span class = 'subtitle'>| 미디어 |</span>";
		text += "IoT는 빅 데이터를 활용하여 미디어와 상호 연결되어 미디어 프로세스가 사용하는 매커니즘에 관여한다.";
		text += " 예를 들어, 회사들은 최적의 위치와 최적의 시간에 타겟이 되는 소비자에게 적절한 미디어를 통해 광고를 송출한다.</li>"
		text += "<li><span class = 'subtitle'>| 환경 모니터링 |</span>";
		text += "IoT는 센서를 통해 공기, 수질, 대기 또는 토양 등을 모니터링한다.";
		text += " 야생 동물의 움직임과 서식지 파악과, 자원개발 뿐만 아니라 지진이나 해일 조기 경보 시스템을 통해 수많은 생명을 구할 수 있다.</li>";
		text += "<li><span class = 'subtitle'>| 인프라 관리 |</span>";
		text += "IoT는 모니터링과 제어 기술을 활용하여 농장, 공장, 주택 등에서 인프라를 관리하는데 큰 영향을 미친다.";
		text += " 이를 통해 어떤 사건이나 변화를 감지하여 발생할 수 있는 위험을 줄이고, 효율적인 유지 보수를 할 수 있다.</li>";
		text += "<li><span class = 'subtitle'>| 교통 |</span>";
		text += "IoT를 통해 교통 시스템이 동적으로 상호작용을 할 수 있다.";
		text += " 동적 교통 시스템으로 스마트 교통제어, 스마트 주차장, 전자 요금 징수 시스템, 물류센터 관리, 차량 관리가 가능하다.</li>";
		text += "<li><span class = 'subtitle'>| 상업 |</span>";
		text += "IoT를 통해 소매/유통 업체들은 실시간, 장소, 상황에 맞는 맞춤형 서비스를 제공할 수 있으며, 고객의 행동을 분석하여 구매 옵션을 추천한다.<br>";
		text += " 또한, 매장 내 이동 경로를 분석하여 점원을 동적으로 배치하고, 에너지 사용(전기, 냉각기 등)을 효과적으로 사용할 수 있다.<br>";
		text += " 이를 통해 어떤 사건이나 변화를 감지하여 발생할 수 있는 위험을 줄이고, 효율적인 유지 보수를 할 수 있다.</li>";
		text += "<li><span class = 'subtitle'>| 제조업 |</span>";
		text += "IoT를 통해 제조업체의 제품 디자인 팀, 임원, 생산 팀이 가상 협업 도구를 사용하여 실시간으로 공동 작업을 수행 할 수 있다.<br>";
		text += " 그리고 고객의 요구에 따라 여러 제품과 옵션을  생산할 수 있는 유연한 조립 라인이 가능하다.</li>";
		text += "</ul>";
		text += " 이 외에도 에너지, 공공 행정, 의료, 빌딩 자동화 등 다양한 분야에서 활용할 수 있다.<br>";
		break;
	case 3:
		document.getElementById("title").innerHTML = "전망";
		
		text += "<li>미국의 기술 연구 및 자문 회사인 Gatner Inc.는 2020년까지 260억개의 장치가 사물 인터넷에 연결될 것이라고 예측한다.";
		text += " 또한 ABI 리서치에 의하면 2020년까지 300억개의 장치가 무선으로 사물 인터넷에 연결될 것이라고 한다.</li>";
		text += "<li>퓨 리서치에 의하면 대다수(약 83%)의 인터넷 사업과 기술 전문가가 사물 인터넷과 웨어러블 컴퓨팅 기술이 2025년까지 전 세계적으로 광범위하고 유익한 변화를 가져올 것이라고 답했다.";
		text += " 이와 동시에 영국 정부는 혁신적인 새로운 기술을 수용하기 위한 적극적인 움직임으로, 2015년 예산 중 사물 인터넷에 대한 연구에 4000만 파운드(한화 약 700억 원)를 투자했다.</li>";
		break;
	case 4:
		document.getElementById("title").innerHTML = "문제점";
		
		text += "<ul class = 'nolist'><li><span class = 'subtitle'>| 자율성 통제 |</span>";
		text += "필립 N. 하워드 교수는 IoT 기술이 사회 통제나 정치적 조작에 악용될 수 있다고 예측했다.";
		text += " 또한 네덜란드 트벤더 대학 교수인 피터 폴 베어백은 기술이 이미 우리의 도덕적 의사 결정에 영향을 미치고 있다고 기술했다.</li>";
		text += "<li><span class = 'subtitle'>| 보안 |</span>";
		text += "현재 매우 빠른 발전 속도는 보안 문제를 적절히 고려하고 있지 않다.";
		text += " 2014년, 사이버 칼럼니스트 조셉 스테인 버그는 포브스에 텔레비전, 주방용 가전제품, 카메라, 온도 조절 장치 등이 \"우리의 가정에 있는 스파이\"라고 기술했다.";
		text += " 스마트 자동차의 경우 엔진, 브레이크, 대시보드 등 차량 제어 장치가 내장된 네트워크를 통해 원격지에서 조작할 수 있다는 것이 해커에 의해 이미 공개됬다.</li>";
		text += "<li><span class = 'subtitle'>| 환경에 미칠 영향 |</span>";
		text += "임베디드 디바이스에 들어있는 전자 부품에는 중금속과 독성 화학 물질이 포함되어 있다.";
		text += " 만약 이러한 부품들이 폐기될 경우, 토양, 지하수, 지표수, 공기 등에 큰 악영향을 미칠 것이다.";
		text += " 그에 더해 대부분의 기기들의 수명이 수 년 이내라는 검을 고려한다면, 폐기물의 양은 10배로 증가할 것으로 예측된다.<br>";
		break;
	}
	document.getElementById("expln").innerHTML = text;
	
	document.getElementById("title").style.borderLeft = "7px solid #83E2F2";
}