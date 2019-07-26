var Basket = function (img) {
	this.img = img
	this.x = 1350
	this.y = 50
	this.width = 100
	this.height = 70
}

Basket.prototype.testPoint = function(x, y) {
	var betweenX = (x >= this.x) && (x <= this.x + this.width)
	var betweenY = (y >= this.y) && (y <= this.y + this.height)

	return betweenX && betweenY
};

Basket.prototype.getFish = function (fish) {
	fish.x = fish.originX = -200
	fish.y = fish.originY = 150 + 80 * Math.random()
	var index = fishes.indexOf(fish)
	fishes.splice(index, 1)
	score += 200 * (1 - fish.scale) | 0
}

Basket.prototype.draw = function (ctx) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}