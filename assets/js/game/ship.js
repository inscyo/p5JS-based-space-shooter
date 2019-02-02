window.addEventListener('keydown', (e) =>{
	if(e.keyCode === 38){
		ship.shipY += -10;
	}else if(e.keyCode === 40){
		ship.shipY += 10;
	}else if(e.keyCode === 37){
		ship.shipX += -10;
	}else if(e.keyCode === 39){
		ship.shipX += 10;
	}else if(e.keyCode === 32){
		let rocketSize = 35;
		let rocketX = ship.shipX - rocketSize/7;
		let rocketY = ship.shipY - rocketSize;

		bombs = rocket.push(new Rockets(rocketX, rocketY, rocketSize, rocketSprite));
		shipBullet.play();
	}
	
});

function Ships(shipX, shipY, shipSize, shipSprite){
	this.shipX = shipX;
	this.shipY = shipY;
	this.shipSize = shipSize;;
	this.shipSprite = shipSprite
	this.shipYspeed = 0;


	this.draw = function(){
		this.shipX = constrain(this.shipX, 0, width - this.shipSize);
		this.shipY = constrain(this.shipY, 0, height - this.shipSize);
		image(this.shipSprite, this.shipX, this.shipY, this.shipSize, this.shipSize);
	}

	this.move = function (){
		this.shipY += this.shipYspeed;
	}
}