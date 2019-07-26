var Fish = function (img, x, y) {
			this.img = img
			this.x = x
			this.y = y
			this.originX = x
			this.originY = y
			this.width = img.width / 4
			this.height = img.height
			this.scale = 0.2 + 0.6 * Math.random()
			this.isCaught = false
			this.frm = 0
			this.dis = 0
		}

		Fish.prototype.getCaught = function (bool) {
			this.isCaught = bool
			if (bool == false) {
				this.originX = 0
				this.originY = this.y
			}
		};

		Fish.prototype.testPoint = function (x, y) {
			var betweenX = (x >= this.x) && (x <= this.x + this.width * this.scale)
			var betweenY = (y >= this.y) && (y <= this.y + this.height * this.scale)
			return betweenX && betweenY
		}

		Fish.prototype.move = function (dx, dy) {
			this.x += dx
			this.y += dy
		}

		Fish.prototype.draw = function (ctx) {
			ctx.save()
			ctx.translate(this.x, this.y)
			ctx.scale(this.scale, this.scale)
			ctx.drawImage(this.image, this.frm * this.width, 0, this.width, this.height, 0, 0, this.width, this.height)
			ctx.restore()
			if (!this.isCaught) {
				this.x += 2
				this.originX += 2
				if (this.x >= 1500) {
					this.x = -100
				}
				this.y = this.originY + 50 * Math.sin(Math.PI / 100 * this.originX)
			}
			this.dis++
			if (this.dis >= 100) {
				this.dis = 0
				this.frm++
				if (this.frm >= 4) {
					this.frm = 0
				}
			}
		}
