class Customer {
  constructor(name) {
    this._name = name;
    this._customerID =
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9);
  }
  get name() {
    return this._name;
  }
  get id() {
    return this._customerID;
  }

  get customerInformation() {
    return `Customer: ${this._name}\nCustomer ID:${this._customerID}`;
  }
}
module.exports = Customer;

/* const frank = new Customer('Frank');
console.log(frank.customerInformation);
const jenny = new Customer('Jenny');
console.log(jenny.customerInformation); */
