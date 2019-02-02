function Stats(statX, statY, gameFont){
	this.statX = statX;
	this.statY = statX;
	this.playerHealth = 5;
	this.playerScore = 0;
	this.gameFont = gameFont;
	this.draw = function (){
		fill(255);
		textSize(16);
		textFont(this.gameFont);
		text('Score : ' + this.playerScore , statX -5, statY);
		text(this.playerHealth + ' : Health', statX + width - 100, statY);
	}
}