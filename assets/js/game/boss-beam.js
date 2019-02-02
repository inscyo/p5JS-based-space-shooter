class Bossbeam{
	
	constructor(bossblast, x, y, w, h, ys){
		this.bossblast = bossblast;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.ys = ys;
	}

	beam(){
		image(this.bossblast, this.x, this.y, this.w, this.h);
	}

	move(){
		this.y += this.ys;
	}
}