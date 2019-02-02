window.addEventListener('keydown', (e) =>{
	if(e.code === 'Enter'){
		game = false;
		theme.pause();
		theme2.play();
	}
	if(game){
		for(let i = 0; i < players.length; i++){
		if(e.keyCode === 37){
			players[i].x += -10;
		}else if(e.keyCode === 39){
			players[i].x += 10;
		}else if(e.keyCode === 38){
			players[i].y += -10;
		}else if(e.keyCode === 40){
			players[i].y += 10;
		}else if(e.keyCode === 32){
			for(let j = 0; j < players.length; j++){
				let blast = beamsprite;
				let x = players[j].x;
				let w = 20;
				let h = w;
				let y = players[j].y - h;
				let ys = 10;
				beams0.push(new Beam(blast, x + w/1.2, y, w, h, ys));
				beams1.push(new Beam(blast, x - w/2, y, w, h, ys));
			}
			beamsound.play();
		}
	}
	}
});
class Player{

	constructor(ship, x, y, w, h, explode){
		this.ship = ship;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.explode = explode;
		this.remove = false;
	}

	spaceship(){
		this.x = constrain(this.x, 0, width - this.w);
		this.y = constrain(this.y, 0, height - this.w);
		image(this.ship, this.x, this.y, this.w, this.h);
	}

	explosion(){
		image(this.explode, this.x - this.w/2, this.y - this.h / 2, this.w * 2, this.h * 2);
	}

}
class Health{
	constructor(playerhealth){
		this.healthsprite = playerhealth;
		this.x = 10;
		this.y = 10;
		this.w = 27;
		this.h = 20;
	}
	health(){
		image(this.healthsprite, this.x/2+2, this.y/2+2, this.w, this.h);
		fill(255);
		noStroke();
		textAlign(LEFT);
		textFont(gamefonts[0]);
		textSize(10);
		text('x' + playerhealthcount, this.x * 4+1, this.y * 2+2);
	}
}
class Task{
	constructor(){
		this.x = width/2;
		this.y = 10*2 + 3;
	}
	speed(){
		fill(255);
		noStroke();
		textAlign(CENTER);
		textFont(gamefonts[1]);
		textSize(12);
		text('x' + Number.parseFloat(taskspeed).toFixed(2), this.x , this.y);
	}
	score(){
		fill(255);
		noStroke();
		textAlign(RIGHT);
		textFont(gamefonts[1]);
		textSize(12);
		text(Number.parseFloat(playerscore).toFixed(0), width - 10, this.y);
		for(let i = 0; i < enemies.length; i++){
			for(let j = 0; j < planets.length; j++){
				if(taskspeed > 2){
					enemies[i].xs = floor(random(-10, 10));
					enemies[i].ys = floor(random(2));
				}
				if(taskspeed > 5){
					enemies[i].xs = floor(random(-10, 10));
					enemies[i].ys = floor(random(4));
				}
				if(taskspeed > 10){
					enemies[i].xs = 0;
					enemies[i].ys = floor(random(20));
					planets[j].ys = random(5);
				}
				if(taskspeed > 14){
					enemies[i].xs = floor(random(20, -20));
					enemies[i].ys = floor(random(40));
					planets[j].ys = random(10);
				}
				if(taskspeed > 20){
					enemies[i].xs = 0;
					enemies[i].ys = floor(random(50));
					planets[j].ys = random(20);
				}
				if(taskspeed > 30){
					enemies[i].xs = floor(random(-50, 50));
					enemies[i].ys = floor(random(60));
					planets[j].ys = random(50);
				}
				if(taskspeed > 50){
					enemies[i].xs = floor(random(-55, 55));
					enemies[i].ys = floor(random(70));
					planets[j].ys = random(60);
				}
				if(taskspeed > 70){
					enemies[i].xs = floor(random(-75, 75));
					enemies[i].ys = floor(random(75));
					planets[j].ys = random(75);
				}
				if(taskspeed > 100){
					enemies[i].xs = floor(random(-100, 100));
					enemies[i].ys = floor(random(100));
					planets[j].ys = random(100);
				}
			}
		}
	}

}