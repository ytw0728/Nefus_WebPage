var canvas;
var ctx;

var STATE_WAIT = 0;
var STATE_RUN = 1;
var STATE_GAMEOVER = 2;
var state = STATE_WAIT;

var spaceShip;
var sx, sy;
var SW=13, SH=16;
var angle = 0;
var spaceShip_img = "/static/pics/dodge/spaceship.png"

var arMete = new Array();
var meteColor = [ "yellow", "lightgreen", "magenta", "cyan", "orange" ];
var NUM = parseInt( window.innerWidth * window.innerHeight / 2530 );

var keyPressed = [];

var oldTime;
var startTime;
var totalTime;

window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.width = document.body.offsetWidth;
	canvas.height=  document.body.offsetHeight;
	if (canvas == null || canvas.getContext == null) return;
	ctx = canvas.getContext("2d");
	
	spaceShip = new Image();
	spaceShip.src = spaceShip_img;

	setInterval(runGame, 30);
}

window.onkeydown = function(e) {
	keyPressed[e.keyCode] = true;
}

window.onkeyup = function(e) {
	keyPressed[e.keyCode] = false;
}

window.onresize = function(){
	canvas = document.getElementById("canvas");
	canvas.width = document.body.offsetWidth;
	canvas.height=  document.body.offsetHeight;
	if (canvas == null || canvas.getContext == null) return;
	ctx = canvas.getContext("2d");
}

// 게임 시작. 운석 난수로 배치하고 시간 리셋
function startGame() {
	arMete.length = 0;
	NUM = parseInt( window.innerWidth * window.innerHeight / 2530 );
	for (var i = 0;i < NUM; i++) {
		arMete.push({
			x:Math.random() * canvas.width,
			y: (i < NUM/2 ? 20 : canvas.height-20),
			vx:Math.random() * 200 - 100,
			vy:Math.random() * 200 - 100,
			color:Math.floor(Math.random() * 5)
		});
	}
	
	sx = canvas.width/2;
	sy = canvas.height/2;
	startTime = getTime();
	oldTime = getTime();
}

function getTime() {
	var date = new Date();
	var time = date.getTime();
	delete date;
	return time;
}

function runGame() {
	switch (state) {
	case STATE_WAIT:
	case STATE_GAMEOVER:
		if (keyPressed[13] == true) {
			if (spaceShip.complete == false) return;
			startGame();
			state = STATE_RUN;
		}
		break;
	case STATE_RUN:

		var move_speed = 6;
		if (keyPressed[38]) {
			if(0 < sy - move_speed && sy - move_speed < canvas.height) sy -= move_speed;
			angle = 0;
		}
		if (keyPressed[40]) {
			if(0 < sy + move_speed && sy + move_speed< canvas.height) sy += move_speed;
			angle = 180;
		}
		if (keyPressed[37]) {
			if(0 < sx - move_speed && sx - move_speed < canvas.width) sx -= move_speed;
			angle = 270;
		}
		if (keyPressed[39]) {
			if(0 < sx + move_speed && sx + move_speed < canvas.width) sx += move_speed;
			angle = 90;
		}
		
		// 대각선 이동시의 각도 계산
		if (keyPressed[38] && keyPressed[39]) {
			angle = 45;
		}
		if (keyPressed[39] && keyPressed[40]) {
			angle = 135;
		}
		if (keyPressed[40] && keyPressed[37]) {
			angle = 225;
		}
		if (keyPressed[37] && keyPressed[38]) {
			angle = 315;
		}

		var ellapse = getTime() - oldTime;
		oldTime = getTime();

		for (var i = 0;i < NUM; i++) {
			var mx = arMete[i].vx * ellapse / 1000;
			var my = arMete[i].vy * ellapse / 1000;
			arMete[i].x += mx;
			arMete[i].y += my;
			if (arMete[i].x > canvas.width) arMete[i].x=0;
			if (arMete[i].x < 0) arMete[i].x=canvas.width;
			if (arMete[i].y > canvas.height) arMete[i].y=0;
			if (arMete[i].y < 0) arMete[i].y=canvas.height;
			
			// 충돌
			var mx = arMete[i].x;
			var my = arMete[i].y;
			if (mx > sx-SW/2 && mx < sx+SW/2 
				&& my > sy-SH/2 && my < sy+SH/2) {
				state = STATE_GAMEOVER;
				break;
			}
		}				
		break;
	}
	draw();
}

function drawText(ctx, text, x, y, font, color, align, base) {
	if (font != undefined) ctx.font = font;
	if (color != undefined) ctx.fillStyle = color;
	if (align != undefined) ctx.textAlign = align;
	if (base != undefined) ctx.textBaseline = base;
	ctx.fillText(text, x, y);
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	switch (state) {
	case STATE_WAIT:
		drawText(ctx, "NEFUS_EASTER_EGG ", canvas.width - 130, canvas.height - 20,
			"20px arial", "yellow", "center", "middle");	
		drawText(ctx, "Dodge", canvas.width/2, canvas.height/2 - 50,
			"50px arial", "yellow", "center", "middle");
		drawText(ctx, "Enter : Start | ArrowKey : Move the Spaceship", 
			canvas.width/2, canvas.height/2, "25px arial", "white");
		break;
	case STATE_RUN:
	case STATE_GAMEOVER:
		// 운석
		for (var i = 0;i < NUM; i++) {
			ctx.beginPath();
			ctx.arc(arMete[i].x, arMete[i].y,2,0,2*Math.PI);
			ctx.fillStyle=meteColor[arMete[i].color];
			ctx.fill();
		}
		
		// 우주선
		ctx.save();
		ctx.translate(sx, sy);
		ctx.rotate(angle * Math.PI / 180);
		ctx.translate(-sx, -sy);
		ctx.drawImage(spaceShip, sx-SW/2, sy-SH/2);
		ctx.restore();
		
		if (state == STATE_GAMEOVER) {
			drawText(ctx, "Game Over", canvas.width/2, canvas.height/2,
				"30px arial", "white", "center", "middle");
		} else {
			// 시간 갱신
			totalTime = (getTime() - startTime) / 1000;
		}

		// 시간 표시
		drawText(ctx, totalTime, canvas.width - 10, 10,
			"20px arial", "yellow", "right", "top");
		break;
	}
}