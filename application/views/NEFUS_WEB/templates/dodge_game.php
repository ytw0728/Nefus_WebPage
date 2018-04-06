<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!doctype html>
<head>
	<meta charset="utf-8">
	<title>닷지 게임</title>
	<meta name="theme-color" content="black"/>
	<link rel="shortcut icon" type="image/x-icon" href="/static/pics/logo/favicon.ico" /> <!--  파비콘을 만드세요! -->
	<style>
	*{
		margin:0;
		padding:0;
	}
	html,body{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: red;
	}
	canvas{
		width: 100%;
		height: 100%;
		background: black;
	}
	</style>
</head>
<body>
	<canvas id="canvas" style="background:black;";>
		이 브라우저는 캔버스를 지원하지 않습니다.
	</canvas>
	<script type="text/javascript" src = '/static/js/easter_egg.js'></script>
</body>
</html>