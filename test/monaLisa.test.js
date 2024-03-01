const { Shop, Item } = require('../src/monaLisa');
// const { clamp } = require('../src/utils.js')

describe('Mona Lisa', function () {
	it('should foo', function () {
		const monaLisa = new Shop([new Item('foo', 0, 0)]);
		const items = monaLisa.updateQuality();
		expect(items[0].name).toBe('foo');
	});
});

describe('Sulfuras, Hand of Ragnaros', function () {
	it('should not sell or change quality', function () {
		const monaLisa = new Shop([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);
		const items = monaLisa.updateQuality();
		expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
		expect(items[0].quality).toBe(80);
		expect(items[0].sellIn).toBe(1);
	});
});

describe('Aged Brie', function () {
	it('should increase quality with age', function () {
		const monaLisa = new Shop([new Item('Aged Brie', 1, 1)]);
		const items = monaLisa.updateQuality();
		expect(items[0].name).toBe('Aged Brie');
		expect(items[0].quality).toBe(2);
		expect(items[0].sellIn).toBe(0);
	});
	it.todo('check negative edge case');
	it.todo('check 0 edge case');
	it.todo('check 50 edge case');
	it.todo('check 51 edge case');
});

describe('Backstage passes to a TAFKAL80ETC concert', function () {
	it('should increase quality by 1 with greater than 10 days till concert', function () {
		let item = new Item('Backstage passes to a TAFKAL80ETC concert', 20, 1);
		const monaLisa = new Shop([item]);
		const items = monaLisa.updateQuality();
		expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
		expect(items[0].quality).toBe(2);
		expect(items[0].sellIn).toBe(19);
	});
	it('should increase quality by 2 with 6 - 10 days inclusive till concert', function () {
		let item = new Item('Backstage passes to a TAFKAL80ETC concert', 7, 1);
		const monaLisa = new Shop([item]);
		const items = monaLisa.updateQuality();
		expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
		expect(items[0].quality).toBe(3);
		expect(items[0].sellIn).toBe(6);
	});
	it('should increase quality by 3 with 5 or less days till concert', function () {
		let item = new Item('Backstage passes to a TAFKAL80ETC concert', 2, 1);
		const monaLisa = new Shop([item]);
		const items = monaLisa.updateQuality();
		expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
		expect(items[0].quality).toBe(4);
		expect(items[0].sellIn).toBe(1);
	});
	it.todo('Handle 0 day edge case');
	it.todo('Handle 1 day edge case');
	it.todo('Handle 5 day edge case');
	it.todo('Handle 6 day edge case');
	it.todo('Handle 10 day edge case');
	it.todo('Handle 11 day edge case');
});
