import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Header from "./Header";
import CheckOut from "./CheckOut";
import Login from "./Login";
import { auth } from "./firebase";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";
import AddProducts from "./AddProducts";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51IgkSECL4dLf4dW8DlGW1AFlPeGM0JtJpbLohf1HQuxkXaFndZvUhDSuET3Pssam7SC5Mz8fz3cr2qyIXUjQEazb00OWTrDI4C"
);

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("this user is", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/addproducts">
            <Header />
            <AddProducts />
          </Route>

          <Route path="/">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
