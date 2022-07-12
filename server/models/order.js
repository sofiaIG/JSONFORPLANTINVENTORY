import Customer from Customer.js

const Order = function(order_date, Customer, itemBought, quantity, id ){
    this.order_date = order_date;
    this.Customer = Customer;
    this.itemBought = itemBought;
    this.quantity = quantity;
    this.id = id;
}

module.exports = Order;