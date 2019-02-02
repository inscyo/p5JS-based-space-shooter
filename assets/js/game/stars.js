function Stars(sprites, x, y, w, h, ys){
	this.sprites = sprites;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.ys = ys;
	this.draw = function(){
		image(this.sprites, this.x, this.y, this.w, this.h);
	}
	this.move = function(){
		this.y += this.ys;
		
		if(this.y > height){
			this.sprites = random(starsprite);
			this.x = random(width);
			this.y = 0;
			this.w = random(1, 1) + 1;
			this.h = w;
			this.ys = random(0.2, 0.5);
		}
	}
}