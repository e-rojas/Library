class Market {
  constructor(marketName, customerName) {
    this._marketNmae = marketName;
    this._customerName = customerName;
    this._basket = [];
  }
  get marketName() {
    return this.marketName;
  }
  get customerName() {
    return this.customerName;
  }
  get basket() {
    return this._basket;
  }
  addToBasket(itemName, itemPrice) {
    this._basket.push({ itemName: itemName, itemPrice: itemPrice });
  }
  get total() {
    let sum = this._basket.map(e => e.itemPrice).reduce((a, b) => a + b);
    return `Your total is: $${sum}`;
  }
  get numItems() {
    console.log(`Your have ${this._basket.length} item(s) in your basket: \n`);
    let itemsList = this._basket.forEach((e, i) =>
      console.log(`${i + 1}- ${e.itemName}: $${e.itemPrice}`)
    );
    console.log(this.total);
  }
}

const FoodMart = new Market('Food Mart', 'James');
FoodMart.addToBasket('Bananas', 4.25);
FoodMart.addToBasket('Onions', 1.55);
FoodMart.addToBasket('Tomatos', 2.25);
FoodMart.addToBasket('Pickels', 5.45);
FoodMart.total;
console.log(FoodMart.total);
FoodMart.numItems;
