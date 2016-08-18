describe('Gilded Rose', function () {
  it('should have an update_quality function', function () {
    expect(update_quality).toBeDefined();
  });
  it('should not change the quality of Sulfuras', function () {
    var val1 = items[3];
    update_quality();
    var val2 = items[3];
    expect(val1).toEqual(val2);
  });
  it('should increase quality of Aged Brie', function () {
    var val1 = items[1].quality;
    update_quality();
    var val2 = items[1].quality;
    expect(val1 + 1).toEqual(val2);
  });
  it('should decrease the quality of Conjured Mana Cake', function () {
    var val1 = items[5].quality;
    update_quality();
    var val2 = items[5].quality;
    expect(val1 - 1).toEqual(val2);
  });
});
