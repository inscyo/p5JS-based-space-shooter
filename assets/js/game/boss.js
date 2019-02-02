
class Boss{

	constructor(bossShip, x, y, w, h, xs, ys){
		this.bossShip = bossShip;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.xs = xs;
		this.ys = ys;
	}

	boss(){
		image(this.bossShip, this.x - this.w + 30, this.y, this.w, this.h);
	}

	move(){
		this.x = constrain(this.x, 0, width);
		this.x += this.xs;
		
		if(this.x >= width){
			this.xs = random(-15);
		}
		else if(this.x <= -1 + this.w/1.17){
			this.xs = random(20);
		}
	}
}