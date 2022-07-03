const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IgkSECL4dLf4dW88bNCS6U3Ce1H3lRRinUnWd4crrSJzO57vxgDeegesbOJfuj1PUmjJ6urM69LQOgBZJRnTBuR00qclDzYSR"
);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// const port = process.env || 5000;
//API

// - App config
const app = express();

//--- Middleware

app.use(cors({ origin: true }));
app.use(express.json());

//API ROUTES

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request backend =>>>>>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// --Listen command

exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-9a863/us-central1/api)
