const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = "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"
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

});

module.exports = router;