class Beam{

	constructor(blast, x, y, w, h, ys){
		this.blast = blast;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.ys = ys;
		this.delete = false;
		this.hitstop = false;
	}

	blaster(){
		image(this.blast, this.x, this.y, this.w, this.h);
	}

	move(){
		this.y += -this.ys;
		if(this.y < 0){
			this.hitstop = true;
		}
	}

	hits(enemies){
		let beamhitsenemies = dist(this.x, this.y, enemies.x, enemies.y);
		if(beamhitsenemies < enemies.w){
			return true;
		}else{
			return false;
		}
	}

	remove(){
		this.delete = true;
	}
}