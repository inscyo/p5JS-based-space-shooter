class Planet{

	constructor(world, x, y, w, h, ys){
		this.world = world;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.ys = 0;
	}

	planet(){
		image(this.world, this.x, this.y, this.w, this.h);
	}

	move(){

		/*planetobstacle += 0.01;

		if(planetobstacle > 100){
			this.y += this.ys;
		}
		if(planetobstacle > 200){
			if(this.y > height){
				this.world = random(asteroidsprite);
				this.x = random(width);
				this.y = -100;
				this.w = random(25);
				this.h = this.w;
				this.ys = random(2);

			}
			this.y += this.ys;
		}
		if(planetobstacle > 250){
			if(this.y > height){
				this.world = random(planetsprite);
				this.x = random(width);
				this.y = -100;
				this.w = random(25);
				this.h = this.w;
				this.ys = random(3);
			}
			this.y += this.ys;
		}
		if(planetobstacle > 350){
			if(this.y > height){
				this.world = random(planetsprite);
				this.world = random(asteroidsprite);
				this.x = random(width);
				this.y = -100;
				this.w = random(25);
				this.h = this.w;
				this.ys = random(10);
			}
			this.y += this.ys;
		}
		if(planetobstacle > 450){
			if(this.y > height){
				this.world = random(planetsprite);
				this.world = random(asteroidsprite);
				this.x = random(width);
				this.y = -100;
				this.w = random(25);
				this.h = this.w;
				this.ys = random(30);
			}
			this.y += this.ys;
		}
		if(planetobstacle > 500){
			if(this.y > height){
				this.world = random(planetsprite);
				this.world = random(asteroidsprite);
				this.x = random(width);
				this.y = -100;
				this.w = random(25);
				this.h = this.w;
				this.ys = random(40);
			}
			this.y += this.ys;
		}
		if(planetobstacle > 600){
			if(this.y > height){
				this.world = random(planetsprite);
				this.world = random(asteroidsprite);
				this.x = random(width);
				this.y = -100;
				this.w = random(25);
				this.h = this.w;
				this.ys = random(50);
			}
			this.y += this.ys;
		}
		if(planetobstacle > 650){
			if(this.y > height){
				this.world = random(planetsprite);
				this.world = random(asteroidsprite);
				this.x = random(width);
				this.y = -100;
				this.w = random(25);
				this.h = this.w;
				this.ys = random(60);
			}
			this.y += this.ys;
		}*/
		this.y += this.ys;

		if(this.y > height){
			this.world = random(planetsprite);
			this.world = random(asteroidsprite);
			this.x = random(width);
			this.y = 0;
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