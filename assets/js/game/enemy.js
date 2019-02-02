class Enemy{

	constructor(enemysprite, x, y, w, h, ys, explosion, enemyblast){
		this.enemysprite = enemysprite;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.ys = ys;
		this.xs = 0;
		this.explosion = explosion;
		this.enemyblast;
	}

	enemy(){
		image(this.enemysprite, this.x, this.y, this.w, this.h);
	}

	explode(){
		image(this.explosion, this.x - this.w/2, this.y - this.h/2, this.w * 2, this.h * 2);
	}

	move(){
		//enemiesobstacle += 0.01;

		this.x += this.xs;
		this.x = constrain(this.x, 0, width - this.w);

		/*if(enemiesobstacle > 100){
			this.xs = floor(random(10, -10));
		}
		if(enemiesobstacle > 150){
			this.xs = floor(random(-10, 10));
		}
		if(enemiesobstacle > 200){
			this.xs = 0;

		}
		if(enemiesobstacle > 250){
			this.ys = random(10);
		}
		if(enemiesobstacle > 300){
			this.xs = floor(random(30, -30));
			this.ys = random(10);
		}
		if(enemiesobstacle > 400){
			this.xs = floor(random(10, -10));
			this.ys = random(10);
		}
		if(enemiesobstacle > 600){
			this.xs = floor(random(20, -20));
			this.ys = random(60);
		}
		if(enemiesobstacle > 800){
			this.xs = floor(random(30, -30));
			this.ys = random(100);
		}
		if(enemiesobstacle > 1000){
			this.xs = floor(random(150, -150));
			this.ys = random(200);
		}*/
		this.y += this.ys;

		if(this.y > height){
			this.enemysprite = random(aliensprite);
			this.x = random(width);
			this.y = random(-100);
			this.w = (random(30) + 5);
			this.h = this.w;
			this.ys = random(1);
		}
	}

	remove(){
		this.ys += 10000;
	}

	hits(players){

		let hits = dist(this.x, this.y, players.x, players.y);
		
		if(hits < players.w){
			return true;
		}else{
			return false;
		}
	}

	createone(){
			this.enemysprite = random(aliensprite);
			this.x = random(width);
			this.y = random(-100);
			this.w = (random(30) + 5);
			this.h = this.w;
			this.ys = random(1);
	}
}

class Enemybeam{

	constructor(blast, x, y, w, h, ys){
		this.blast = blast;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.ys = ys;
		this.xs = random(1);
		this.hitstop = false;
		this.hitsplayersbeam = false;
	}

	beam(){
		image(this.blast, this.x, this.y, this.w, this.h);
	}

	move(){
			this.y += this.ys;
			

			if(this.y >= height){
				this.hitstop = true;
			}
			for(let i = 0; i < beams0.length; i++){
				for(let j = 0; j < beams1.length; j++){
				let hitsplayerbeam0 = dist(this.x, this.y, beams0[i].x, beams0[i].y);
				let hitsplayerbeam1 = dist(this.x, this.y, beams1[j].x, beams1[j].y);
				if(hitsplayerbeam0 < beams0[i].w || hitsplayerbeam1 < beams1[j].w){
					this.hitsplayersbeam = true;
				}
			}
		}
	}

	hits(players){
		let hits = dist(this.x, this.y, players.x, players.y);
		if(hits < players.w){
			return true;
		}else{
			return false;
		}
	}
	
}