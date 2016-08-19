describe('Gilded Rose', function () {
  it('should increase quality of Aged Brie', function () {
    var val1 = items[1].quality;
    update_quality(items);
    var val2 = items[1].quality;
    expect(val1 + 1).toEqual(val2);
  });
  it('should decrease the quality of Conjured Mana Cake', function () {
    var val1 = items[5].quality;
    update_quality(items);
    var val2 = items[5].quality;
    expect(val1 - 1).toEqual(val2);
  });
  it('should not decrease the sell in of Sulfuras', function () {
    var val1 = items[3].sell_in;
    update_quality(items);
    var val2 = items[3].sell_in;
    expect(val1).toEqual(val2);
  });
  it('should decrease quality to zero if sell_in is 0 for Backstage passes', function () {
    items[4].sell_in = 0;
    update_quality(items);
    var val1 = items[4].quality;
    expect(val1).toEqual(0);
  });
  it('should increase quality by three if sell_in is <6 for Backstage passes', function () {
    var val1 = items[4].quality;
    items[4].sell_in = 5;
    update_quality(items);
    var val2 = items[4].quality;
    expect(val1 + 3).toEqual(val2);
  });
  it('should cap quality increase of Aged Brie to 50', function () {
    items[1].quality = 50;
    var val1 = items[1].quality;
    update_quality(items);
    var val2 = items[1].quality;
    expect(val1).toEqual(val2);
  });
  it('should not let conjured mana cake fall below 0 value', function () {
    items[5].quality = 0;
    var val1 = items[1].quality;
    update_quality(items);
    var val2 = items[1].quality;
    expect(val1).toEqual(val2);
  });
});
