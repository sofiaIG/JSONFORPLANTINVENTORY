import {customer, order} from '../models/app.js'
use Online_Shop;
db.dropDatabase();


db.orders.insert([
    {
        order_date : order.order_date,
        customer : order.customer.id,
        item_bought :order.itemBought,
        quantity : order.quantity,
        id : order.id
        
    }

]);

db.customer.insert([
    {
        name : customer.name,
        address :customer.address,
        id: customer.id
    }
]);