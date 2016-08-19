function Item (name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality (items) {
  for (var i = 0; i < items.length; i++) {
    sortItems(items[i]);
  }
}

function sortItems (item) {
  if (item.name === 'Sulfuras, Hand of Ragnaros') {
    // do nothing you're guccci
  }
  else if (item.name === 'Aged Brie') {
    updateBrie(item);
  }
  else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
    updateBackstagePasses(item);
  }else {
    updateNormalItems(item);
  }
}

function updateBrie (item) {
  var underMaxValue = item.quality < 50;
  if (underMaxValue) {
    item.quality++;
  }
  item.sell_in--;
}

function updateBackstagePasses (item) {
  var moreThanTenDays = item.sell_in > 10;
  var moreThanFiveDays = item.sell_in > 5;
  var atLeastOneDay = item.sell_in > 0;
  var overMaxValue = item.quality > 50;

  item.sell_in--;
  if (moreThanTenDays) {
    item.quality++;
  }
  else if (moreThanFiveDays) {
    item.quality += 2;
  }
  else if (atLeastOneDay) {
    item.quality += 3;
  }else {
    item.quality = 0;
  }
  if (overMaxValue) {
    item.quality = 50;
  }
}

function updateNormalItems (item) {
  var Expired = item.sell_in < 0;
  var hasValue = item.quality >= 0;
  item.sell_in--;
  if (hasValue && Expired) {
    item.quality -= 2;
  }else {
    item.quality--;
  }
  if (!hasValue) {
    item.quality = 0;
  }
}
