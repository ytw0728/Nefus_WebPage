<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name = "viewport" content ="width=device-width, initial-scale=1.0,  target-densitydpi=medium-dpi" />
	
	<title>IoT 소개</title>
	<style>
		* {
			margin: 0px;
			padding: 0px;
		}
		body {
			overflow: hidden;
			background-color: #3A3A3C;
			position: relative;

			transition: top 1s;
			-webkit-transition: top 1s;
			-moz-transition: top 1s;
			-ms-transition: top 1s;
			-o-transition: top 1s;

			top: 0;

		}
		
		.overlap {
			position: absolute;
		}
		.disArc {
			opacity: 0;
		}
		
		#centerLbl {
			color: white;
			text-align: center;
		}
		#paint {
			position: relative;
			top: 0px;
			
			-moz-transition: top 1s;
			-ms-transition: top 1s;
			-o-transition: top 1s;
			-webkit-transition: top 1s;
			transition: top 1s;
		}
		#texts {
			position: relative;
			top: 0;
			width: 90%;

			margin-bottom: 0px;
			margin-left: 5%;
			margin-right: 5%;
			color: white;
			background-color: #3A3A3C;
			overflow: auto;

			-moz-transition: margin-top 1s;
			-ms-transition: margin-top 1s;
			-o-transition: margin-top 1s;
			-webkit-transition: margin-top 1s;
			transition: margin-top 1s;
		}
		#context {
			position: relative;
			margin: auto;
		    max-width: 960px;
		    padding-bottom: 10rem;
		}
		#title {
			margin: 40px 0px 10px;
			padding-bottom: 2px;
			padding-left: 16px;
			font-size: 1.5em;
		}
		#expln {
			text-align: justify;
			letter-spacing: 0.1rem;
			line-height: 1.5rem;
		}
		#expln > li{
			display: block;
			margin-bottom: 1rem;
			text-indent: .5rem;
		}
		#expln ul {
			margin-top: 5px;
			margin-bottom: 5px;
			margin-left: 2rem;

			list-style: decimal-leading-zero;
		}
		#expln ul.nolist{
			list-style: none;
		}
		#expln ul > li {
			margin: 1rem 0;
		}

		.subtitle{
			display: block;

			font-size: 1rem;
			font-weight: bold;
		}

		#toTop {
			position: absolute;
			right: 0;
			bottom: 2rem;
			display: inline-block;
			padding: .3rem .3rem;
			color: white;
			font-size: 1.1em;
			cursor: pointer;




			z-index: 1000;

		}
		#toTop:hover {
			background: white;
			color: #333;
		}
	</style>
	<Style>
		@media (max-width: 300px){html{font-size: 6px;}}
		@media (min-width:301px) and (max-width:400px){html{font-size:8px;}}
		@media (min-width:401px) and (max-width:500px){html{font-size:10px;}}
		@media (min-width:501px) and (max-width:700px){html{font-size:12px;}}
		@media (min-width:701px) and (max-width:900px){html{font-size:14px;}}
		@media (min-width:901px) and (max-width:1024px){html{font-size:14px;}}
		@media (min-width:1025px) and (max-width:1330px){html{font-size:16px;}}
		@media (min-width:1331px) and (max-width:1800px){html{font-size:19px;}}
		@media (min-width:1801px) and (max-width:2000px){html{font-size:22px;}}
		@media (min-width:2001px) and (max-width:2200px){html{font-size:25px;}}
		@media (min-width:2201px) and (max-width:2400px){html{font-size:31px;}}
		@media (min-width:2401px) and (max-width:2600px){html{font-size:37px;}}
		@media (min-width:2601px) and (max-width:2800px){html{font-size:43px;}}
		@media (min-width:2801px) and (max-width:3000px){html{font-size:49px;}}
		@media (min-width:3001px) and (max-width:3200px){html{font-size:55px;}}
	</Style>
	
	<script type="text/javascript" charset="utf-8" src="/static/hyowon/iot.js"></script>
</head>
<body onload="draw();" onresize="javascript: window.location.reload();">
	<a href = "#" id = "firstTop" style = "display: none;"></a>
	<span style = "position: absolute; top: 5px; left: 10px; color: rgba(255,255,255,0.3); font-size: 1rem;">
		By 효원
	</span>
	<div id="paint">
		<div class="overlap" id="divCenter">
			<canvas id="cCenterRot"></canvas>
		</div>
		<div class="overlap" style="top:0px; left:0px;">
			<canvas id="canvas"></canvas>
		</div>
		<div class="overlap" id="hist">
			<img src="/static/hyowon/history.png" alt="history.png" class="disArc" id="histImg" title = '역사'>
		</div>
		<div class="overlap" id="app">
			<img src="/static/hyowon/application.png" alt="application.png" class="disArc" id="appImg" title = '활용'>
		</div>
		<div class="overlap" id="outlk">
			<img src="/static/hyowon/outlook.png" alt="outlook.png" class="disArc" id="outlkImg" title = '전망'>
		</div>
		<div class="overlap" id="dngr">
			<img src="/static/hyowon/danger.png" alt="danger.png" class="disArc" id="dngrImg" title = '문제점'>
		</div>
		<div class="overlap" id="center">
			<img src="/static/hyowon/center1.png" alt="center" id="centerImg" title = 'center'>
			<p id="centerLbl">
				<br>
				▲ Click!
			</p>
		</div>
	</div>
	<div id="texts">
		<div id="context">
			<h3 id="title"></h3>
			<p id="expln"></p>

			<span id="toTop">△Top<span>
		</div>
	</div>
</body>
</html>