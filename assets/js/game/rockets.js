function Rockets(rocketX, rocketY, rocketSize, rocketSprite){
	this.rocketX = rocketX;
	this.rocketY = rocketY;
	this.rocketSize = rocketSize;
	this.rocketSprite = rocketSprite;


	this.draw = function(){
		image(this.rocketSprite, this.rocketX, this.rocketY, this.rocketSize, this.rocketSize);
	}

	this.hits = function(enemy){
		let hits = dist(this.rocketX, this.rocketY, enemy.enemyX, enemy.enemyY);
		if(hits < this.rocketSize - 10){
			return true;
		}else{
			return false;
		}
	}

	this.move = function(){
		this.rocketY += -10;
	}
}