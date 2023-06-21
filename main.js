function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	b=ml5.poseNet(video,l);
	b.on('pose',t);
}

function l() {
	console.log("done");
}

function t(result) {
	if (result.length>0) {
		console.log(result);
		noseX=result[0].pose.nose.x;
		noseY=result[0].pose.nose.y;
	}
}

function draw() {
	game()
}






