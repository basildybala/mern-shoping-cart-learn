const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = "sk_test_51KyV11SIPg3GKMJJqx7aXAZpz3bFDNkcWX9B6yAdTYpf5r9bwZMZR31gQWyfFeg1lPhUXv44uV0nKEyZHXI4OR5a009GVn2qp8"
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
    

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "INR",
      
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
        console.log(stripeErr);
      } else {
        res.status(200).json(stripeRes);
        console.log(stripeRes);
      }
    }
  );
  console.log(err);
});

module.exports = router;