/* 
1 - As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */
const {orange, pineapple,kiwi,apple,banana,catalogue} = require("../data/data");
const {scanItem, addItem, getTotal, removeItem} = require("../checkout");

describe('return details after scan an item using a barcode', () => {
  it('scanItem',() => {
    expect(scanItem(789)).toMatchObject(orange);
    expect(scanItem(5367)).toMatchObject(pineapple);
    expect(scanItem(765)).toMatchObject(kiwi);
    expect(scanItem(123)).toMatchObject(apple);
    expect(scanItem(456)).toMatchObject(banana);
  })
})

describe('add an item to my basket', () => {
  const myBasket = [];
  it('addItem',() => {
    addItem(myBasket,orange);
    expect(myBasket.length).toBe(1);
    addItem(myBasket,apple);
    expect(myBasket.length).toBe(2);
    addItem(myBasket,banana);
    expect(myBasket.length).toBe(3);
  })
})

describe('see the total price of all items in my basket', () => {
  const myBasket = [orange,apple];
  it('getTotal',() => {
    expect(getTotal(myBasket)).toBe(12);
  })
})

describe('remove an item from my basket', () => {
  const myBasket = [orange,apple,banana];
  it('removeItem',() => {
    removeItem(myBasket,apple);
    expect(myBasket.length).toBe(2);
    removeItem(myBasket,banana);
    expect(myBasket.length).toBe(1);
  })
})


