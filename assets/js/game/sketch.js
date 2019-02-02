/*---------*/
/* Space shooter game by inson */
/* -------- */
let gamefonts = [], game = false, theme = document.querySelector('.main-theme-html'), theme2 = document.querySelector('.main-theme2-html'), gamebackground, gameassets = []
, stars = [], star = [], starsprite = [], planets = [], planetCount = 10, planetsprite = [], asteroidsprite = [], nebulas = [], sunsprite, planetobstacle = 0, 
players = [], playersprite, playerhealth, playerscore = 0, taskspeed = 0, playerhealthcount = 20, playerhealthsprite, playerexplodesound, playerhitsound, 
beams0 = [], beams1 = [], beamsprite, beamsound, enemies = [], enemiesCount = 150, aliensprite = [], explosionsprite, enemiessound, enemiesobstacle = 0, enemiesbeam = [], enemiesbeamsprite, enemiesbeaminterval = 3000, 
enemiesship = [], bosses = [], bosssprite = [], bossbeams = [], bossbeamsprite = [], tasks;
function preload(){
	for(let i = 0; i < 8; i++){
		gamefonts[i] = loadFont('assets/fonts/gamefont' + i + '.ttf');
	}
	for(let i = 0; i < 4; i++){
		gameassets[i] = loadImage('resources/sprites/background/background' + i + '.png');
	}
	for(let i = 0; i < 3; i++){
		starsprite[i] = loadImage('resources/sprites/star/star' + i + '.png');
	}
	for(let i = 0; i < 9; i++){
		planetsprite[i] = loadImage('resources/sprites/planet/planet' + i + '.png');
	}
	for(let i = 0; i < 5; i++){
		asteroidsprite[i] = loadImage('resources/sprites/asteroid/asteroid' + i + '.png');
	}
	nebulas = loadImage('resources/sprites/nebula/nebula0.jpg');
	sunsprite = loadImage('resources/sprites/sun/sun0.png');
	playersprite = loadImage('resources/sprites/ship/ship1.png');
	playerexplodesound = loadSound('resources/sound/explosion/explosion0.wav');
	playerhealthsprite = loadImage('resources/sprites/health/health3.png');
	playerhitsound = loadSound('resources/sound/beam/beam1.wav');
	beamsprite = loadImage('resources/sprites/beam/ship-beam/beam0.png');
	beamsound = loadSound('resources/sound/beam/beam0.mp3');
	for(let i = 0; i < 7; i++){
		aliensprite[i] = loadImage('resources/sprites/enemy/alien/alien' + i + '.png');
	}
	explosionsprite = loadImage('resources/sprites/explosion/explosion0.png');
	enemiessound = loadSound('resources/sound/explosion/explosion3.wav');
	enemiesbeamsprite = loadImage('resources/sprites/beam/enemy-beam/beam0.png');
	for(let i = 0; i < 2; i++){
		bosssprite[i] = loadImage('resources/sprites/enemy/alien-boss/alien-boss' + i + '.png');
	}
	for(let i = 0; i < 1; i++){
		bossbeamsprite[i] = loadImage('resources/sprites/beam/ship-beam/beam0.png');
	}
}
let before_start = document.querySelector('#before_start');
let canvas_before = document.querySelector('#canvas_before');
function startgame(){
	canvas_before.style.display = 'none';
	theme.play();
	theme2.pause();
	setTimeout(function(){
		game = true;
	}, 1000);
}
function setup(){
	let windowW = windowWidth/2;
	if(windowWidth < 820){
		windowW = windowWidth;
	}
	var ctx = createCanvas(windowW, windowHeight);
	ctx.parent('canvas-parent');
	before_start.style.width = width+'px';
	before_start.style.height = height+'px';
	let x = width;
	let y = height;
	gamebackground = new Gamebackground(x, y);
	for(let i = 0; i < 300; i++){
		let sprites = random(starsprite);
		let x = random(width);
		let y = random(height);
		let w = random(1);
		let h = w;
		let ys = random(1);
		star[i] = new Stars(sprites, x, y, w, h, ys);
	}
	for(let i = 0; i < planetCount; i++){
		let world = random(planetsprite);
		let x = random(width);
		let y = -100;
		let w = random(15);
		let h = w;
		let ys = random(1);
		planets[i] = new Planet(world, x, y, w, h, ys);
	}
	for(let i = 0; i < 1; i++){
		let ship = playersprite;
		let w = 25;
		let x = random(width) - w - 10;
		let h = 20;
		let y = height - h - 10;
		let explode = explosionsprite;
		players[i] = new Player(ship, x, y, w, h, explode);
	}
	playerhealth = new Health(playerhealthsprite);
	for(let i = 0; i < random(enemiesCount); i++){
		let enemysprite = random(aliensprite);
		let x = random(width);
		let y = 0;
		let w = (random(30) + 5);
		let h = w;
		let ys = random(1);
		let explode = explosionsprite;
		enemieAdd = new Enemy(enemysprite, x, y, w, h, ys, explode);
		enemies[i] = enemieAdd;
	}
	for(let i = 0; i < 4; i++){
		enemiesship[i] = loadImage('resources/sprites/enemy/alien-ship/alien-ship' + i + '.png');
	}
	setInterval(function(){
		for(let i = 0; i < enemies.length; i++){
			let enemiesblast = enemiesbeamsprite;
			let y = enemies[i].y + 10;
			let w =  enemies[i].w/6;
			let x = enemies[i].x + w*2 + 1.5;
			let h = w*2;
			let ys = 5;
			enemiesbeam.push(new Enemybeam(enemiesblast, x, y, w, h, ys));
		}
	}, enemiesbeaminterval);
	tasks = new Task();
}

function draw(){
	background(0);
	for(let i = 0; i < players.length; i++){
		players[i].spaceship();
	}
	if(game){
		for(let i = 0; i < star.length; i++){
			star[i].draw();
			star[i].move();
		}
		for(let i = 0; i < planets.length; i++){
			planets[i].planet();
			planets[i].move();
			for(let j = 0; j < players.length; j++){
				if(planets[i].hits(players[j])){
					playerhealthcount = 0;
					players[j].explosion();
					players.splice(j, 1);
					playerexplodesound.play();
				}
			}
		}
		for(let i = 0; i < beams0.length; i++){
			beams0[i].blaster();
			beams0[i].move();
			for(let j = 0; j < enemies.length; j++){
				if(beams0[i].hits(enemies[j])){
					enemies[j].explode();
					enemies[j].remove();
					beams0[i].remove();
					enemiessound.play();
					let enemysprite = random(aliensprite);
					let x = random(width);
					let y = random(-100);
					let w = (random(30) + 5);
					let h = w;
					let ys = random(1);
					let explode = explosionsprite;
					enemies.push(new Enemy(enemysprite, x, y, w, h, ys, explode));
					taskspeed += 0.1;
					if(enemies[j].w < 5){
						playerscore += 1;
					}else if(enemies[j].w > 5){
						playerscore += 5;
					}else if(enemies[j].w > 10){
						playerscore += 10;
					}else{
						playerscore += 20;
					}
				}
				if(beams1[i].hits(enemies[j])){
					enemies[j].explode();
					enemies[j].remove();
					beams1[i].remove();
					enemiessound.play();
					let enemysprite = random(aliensprite);
					let x = random(width);
					let y = random(-100);
					let w = (random(30) + 5);
					let h = w;
					let ys = random(1);
					let explode = explosionsprite;
					enemies.push(new Enemy(enemysprite, x, y, w, h, ys, explode));
					taskspeed += 0.1;
					if(enemies[j].w < 5){
						playerscore += 1;
					}else if(enemies[j].w > 5){
						playerscore += 5;
					}else if(enemies[j].w > 10){
						playerscore += 10;
					}else{
						playerscore += 20;
					}
				}
			}
		}
		for(let i = 0; i < enemiesbeam.length; i++){
			if(enemiesbeam[i].hitsplayersbeam){
				for(let j = 0; j < beams0.length; j++){
					beams0.splice(j, 1);
				}
				for(let k = 0; k < beams1.length; k++){
					beams1.splice(k, 1);
				}
				enemiesbeam.splice(i, 1);
			}
		}
		for(let i = 0; i < enemies.length; i++){
			enemies[i].enemy();
			enemies[i].move();
		}
		for(let i = 0; i < enemies.length; i++){
			for(let j = 0; j < players.length; j++){
				if(enemies[i].hits(players[j])){
					playerhealthcount--;
					enemies[i].remove();
					enemies[i].explode();
					enemiessound.play();
					enemies.splice(i, 1);
					let enemysprite = random(aliensprite);
					let x = random(width);
					let y = random(-100);
					let w = (random(30) + 5);
					let h = w;
					let ys = random(1);
					let explode = explosionsprite;
					enemies.push(new Enemy(enemysprite, x, y, w, h, ys, explode));
					if(playerhealthcount <= 0){
						playerhealthcount = 0;
						players[j].explosion();
						players.splice(j, 1);
						playerexplodesound.play();
					}
					if(enemies[i].w < 5){
						playerscore += 1;
						taskspeed += 0.5;
					}else if(enemies[i].w > 5){
						playerscore += 5;
						taskspeed += 1;
					}else if(enemies[i].w > 10){
						playerscore += 10;
						taskspeed += 1.5;
					}else{
						playerscore += 20;
						taskspeed += 2;
					}
				}
			}
		}
		for(let i = 0; i < beams1.length; i++){
			beams1[i].blaster();
			beams1[i].move();
			/*for(let j = 0; j < enemies.length; j++){
				if(beams1[i].hits(enemies[j])){
					enemies[j].remove();
					beams1[i].remove();
				}
			}*/
		}
		for(let i = 0; i < beams0.length; i++){
			if(beams0[i].delete){
				beams0.splice(i, 1);
				beams1.splice(i, 1);
			}
			else if(beams0[i].hitstop){
				beams0.splice(i, 1);
				beams1.splice(i, 1);
			}
		}
		/*for(let i = 0; i < beams1.length; i++){
			if(beams1[i].delete){
				beams1.splice(i, 1);
			}
		}*/

		/*for(let i = 0; i < bosses.length; i++){
			bosses[i].boss();
			bosses[i].move();
		}*/

		/*for(let i = 0; i < bossbeams.length; i++){
			bossbeams[i].beam();
			bossbeams[i].move();
		}*/
		for(let i = 0; i < enemiesbeam.length; i++){
			enemiesbeam[i].beam();
			enemiesbeam[i].move();
			if(enemiesbeam[i].hitstop){
				enemiesbeam.splice(i, 1);
			}
		}
		for(let i = 0; i < enemiesbeam.length; i++){
			for(let j = 0; j < players.length; j++){
				if(enemiesbeam[i].hits(players[j])){
					playerhitsound.play();
					enemiesbeam.splice(i, 1);
					playerhealthcount--;
					if(playerhealthcount <= 0){
						playerhealthcount = 0;
						players[j].explosion();
						players.splice(j, 1);
						playerexplodesound.play();
					}
				}
			}
		}
		playerhealth.health();
		tasks.speed();
		tasks.score();
	}else{
		/*gamebackground.titlebeforestart();
		gamebackground.titlestartbtn();
		gamebackground.titleoptionbtn();
		gamebackground.titlehelpbtn();
		gamebackground.titlequitbtn();
		*/
		for(let i = 0; i < star.length; i++){
			star[i].draw();
			star[i].move();
		}
	}
}