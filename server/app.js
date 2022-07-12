

const Customer = require('./customer.js');
const Order = require('./order.js');

useEffect(()=>{
    getItem()
},[])

itemBought = "Wallace"
const customer = new Customer("John Johnson", "43 Membris Way, Woodford Halse, NN11 3QZ");
const order = new Order( "10/07/2022", customer, item, 2, 01)

const getItem = function(){
    fetch(`http://localhost:8080/plants/${itemBought}`)
        .then(res =>res.json())
        .then(result =>setItem(result))

}

const submitMessage = (order) => {
    const orderBody = {
      order_number: 'hof',
      plant: order.item,
      number_purchased: order.quantity,
      shipping_address: order.customer.address
    };
    fetch("http://localhost:8080/orders", {
      method: "POST",
      body: JSON.stringify(orderBody),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
  };

export {customer, order}







