const { clamp } = require('./utils.js');

class Item {
	constructor(name, sellIn, quality) {
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}
}

class Shop {
	constructor(items = []) {
		this.items = items
	}
	updateQuality() {
		const HAMMER = 'Sulfuras, Hand of Ragnaros'
		const BRIE = 'Aged Brie'
		const TICKET = 'Backstage passes to a TAFKAL80ETC concert'

		const qualityClamp = clamp(0, 50)

		for (let item of this.items) {
			if (item.name === HAMMER) continue
			item.sellIn--
			
			if (item.name === BRIE) {
				item.quality = qualityClamp(++item.quality)
				continue
			}
			
			if (item.name === TICKET) {
				if (item.sellIn < 0) item.quality = 0
				else if (item.sellIn <= 5) item.quality += 3
				else if (item.sellIn <= 10) item.quality += 2
				else item.quality++
				continue
			}

			if (item.name.toLowerCase().includes("conjured")) {
				item.quality -= item.sellIn < 0 ? 4 : 2
				continue
			}

			// Default item behavior
			item.quality -= item.sellIn < 0 ? 2 : 1
		}

		return this.items
	}
}

module.exports = {
	Item,
	Shop,
}
