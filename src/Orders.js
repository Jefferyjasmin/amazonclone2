import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import "./Orders.css";
import { Order } from "./Order";
const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            console: console.log(
              "this is the user =>>>>>>> data = " + doc.data()
            ),
          }))
        )
      );
  }, [user]);
  console.log("this is the orders =>>>>>>", orders);
  return (
    <div className="orders">
      <h2> Your Order</h2>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
        {console.log("console.log order =>>>>>>", orders)}
      </div>
    </div>
  );
};

export default Orders;
