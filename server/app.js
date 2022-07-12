


const submitMessage = (order) => {
    const orderBody = {
      orderNumber: '1002',
      plant: 1,
      quantity: 2,
      shippingAddress:"10 London Street, Eh7 8IK",
      customerName: "Kate Johnson"
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      body: JSON.stringify(orderBody),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
  };









