var ShowText = function (string, x, y) {
	this.string = string
	this.beginY = y - 300
	this.x = x
	this.y = y
}

ShowText.prototype.draw = function(ctx) {
	ctx.save()
	ctx.font = '50px Arial'
	ctx.translate(this.x, this.beginY)
	ctx.fillText(this.string, 0, 0)
	ctx.restore()

	if (this.beginY <= this.y) {
		this.beginY += 2
	}
};