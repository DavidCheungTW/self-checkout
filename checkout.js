/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */

const { orange, pineapple,kiwi,apple,banana,catalogue } = require("./data/data");

const scanItem = (num) => {
    return catalogue.find(element => element.barcode === num);
}


const addItem = (basket,item) => {
   return basket.push(item);
}

const getTotal = (basket) => {
    return basket.reduce( (acc,obj) => {return acc + obj.price;}, 0);
}

const removeItem = (basket,item) => {
    const index = basket.findIndex( (obj) => { return  obj.barcode === item.barcode } );
    return basket.splice(index,1);
 }

module.exports = {
    scanItem,
    addItem,
    getTotal,
    removeItem
};
