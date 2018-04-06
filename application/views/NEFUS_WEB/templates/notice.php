<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!doctype html>
<html>
<head>
	<title>구형 브라우저 페이지</title>

	<!--[if lte IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<!--[if lte IE 7]>
	<script src="js/IE8.js"></script>
	<![endif]-->
	<link type = "text/css" rel = "stylesheet" charset = "utf-8" href = "/static/css/index_font.css" />
	<link rel="shortcut icon" type="image/x-icon" href="/static/pics/logo/favicon.ico" /> <!--  파비콘을 만드세요! -->
	<style>
		*{
			margin:0;
			padding:0;

			font-family: 'NanumGothic';
		}
		html,body{
			width: 100%;
			height: 100%;
		}
		body{
			background: #f0f0f0;
		}
		div#header{
			margin: 0;
			width: 100%;
			height: 2em;
			line-height: 2em;
			font-size: 2em;
			text-align: center;
			color: white;
			font-weight: bold;
			background: #666;
			box-shadow: 0px 0px .5em rgb(0,0,0);
			-ms-box-shadow: 0px 0px .5em rgb(0,0,0);
		}

		h3,p{
			padding-top: 3em;
			line-height: 1.5em;
			display: block;
			width: 100%;

			letter-spacing: .05em;
			text-align: center;
		}
		div{
			margin-top: 3em;
			display: block;
			width: 100%;
			text-align: center;
		}
		div a{
			display: inline-block;
			width: 10em;
			font-size: 1em;
			padding: 3em 0;
			cursor: pointer;
			font-weight: bold;

			margin: 0 1em;
			color: black;
			text-decoration: none;
			text-align: center;
		}
		div a:hover img{
			width: 6em;
			height: 6em;
		}
		div a:hover{
			padding: 2em 0;
			outline: solid .05em rgb(50,50,150);
		}
		div a img{
			width: 5em;
			height: 5em;
			border:none;
		}
	</style>
</head>
<body>
<div id = "header">
	NOTICE
</div id = "header">
<h3>" 본 페이지는 구형 브라우저 사용자를 위한 페이지입니다. "</h3>
<p>
	죄송합니다. 저희 NEFUS 홈페이지는 <span style = 'text-decoration: underline; color: rgb(255,30,30);'>인터넷 익스플로러 8 이하의 구형 브라우저</span>를 지원하지 않고 있습니다. <Br/>
	아래에 나열된 링크를 통해 최신의 브라우저를 설치하시면 NEFUS 홈페이지를 이용하실 수 있습니다.
</p>
<div>
	<a id = 'ie' href = 'http://windows.microsoft.com/ko-kr/internet-explorer/download-ie'>
	<img src = 'https://attachment.namu.wiki/Internet_Explorer.png' alt = '인터넷익스플로러'/><br/>인터넷 익스플로러<Br/>Internet Explorer</a>
	<a id = 'chrome' href = 'https://www.google.co.kr/chrome/browser/desktop'>
	<img src = 'https://lh3.ggpht.com/O0aW5qsyCkR2i7Bu-jUU1b5BWA_NygJ6ui4MgaAvL7gfqvVWqkOBscDaq4pn-vkwByUx=w300' alt = '크롬'/>
	<br/>크롬<br/>Chrome</a>
	<a id = 'firefox' href = 'https://www.mozilla.org/ko/firefox/new/'>
	<img src = 'http://cfile10.uf.tistory.com/image/1142A10D4BDEADCF70F37E' alt = '파이어폭스'/><br/>파이어 폭스<br/>Firefox</a>

	<a id = 'opera' href = 'http://www.opera.com/ko/computer/windows'>
	<img src = 'https://cdn.mirror.wiki/http://www-static.opera.com/static-heap/75/759b5d5a74e1be5fdfd0fd1fed338c9d1c6cbb33/opera-152.png' alt = '오페라'/>
	<br/>
	오페라<br/>Opera</a>
</div>
</body>
</html>