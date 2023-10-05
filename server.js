const express = require("express");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const WelcomeEmail = require("@sendgrid/mail");

require("dotenv").config();
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public/css"));

WelcomeEmail.setApiKey(process.env.SENDGRID_API_KEY);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.js");
});

app.post('/', (req, res) => {
  const email = req.body.email;
  const sendWelcomeEmail = async (msg) => {
    try {
      await WelcomeEmail.send(msg);
      console.log("Message sent successfully!");
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  };

  sendWelcomeEmail({
    to: email,
    from: "guwanisenadeera123@gmail.com",
    subject: "Welcome to Devlink",
    text: "Thank you for your subscribing to Devlink.",
  });

  console.log("Email sent");
  res.send("Email Sent Successfully");
});

app.get("/paymentCreation", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1999,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating payment intent");
  }
});

const portPayment = 3004;
app.listen(portPayment, () => {
  console.log("Server is running on port: " + portPayment);
});
