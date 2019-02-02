class Location{

	constructor(x, y, w, h, ys){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.ys = ys;
	}

	/* Star */
	star(){
		fill(255);
		noStroke();
		ellipse(this.x, this.y, this.w, this.h);
	}

	starmove(){
		this.y += this.ys;
		if(this.y > height){
			this.x = random(width);
			this.y = 0;
			this.w = random(1);
			this.h = random(2);
			this.ys = random(1);
		}
		
	}
}