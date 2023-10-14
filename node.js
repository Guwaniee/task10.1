// Sample Node.js/Express server (Back-End)
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post("/subscribe", (req, res) => {
  const { email } = req.body;

  // In a real application, you would send an email here.
  // For this example, we'll respond with a simple message.
  res.json({ message: `Email sent to ${email}` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
