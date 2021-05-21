// const braintree = require("braintree");
// const { response } = require("express");

// const gateway = new braintree.BraintreeGateway({
//   environment: braintree.Environment.Sandbox,
//   merchantId: "3np8gd2brmkgjst2",
//   publicKey: "42mhppnp9pm8x6qd",
//   privateKey: "012096318acd0f7198bb4eaac5f8e582"
// });

// exports.getToken=(req,res)=>{
//     gateway.clientToken.generate({},function(err,response){
//         if(err){
//             res.status(500).send(err)
//         }
//         else{
//             res.send(response);
//         }
//     })
// }

// exports.processPayment=(req,res)=>{
//     let nonceFromTheClient=req.body.paymentMethodNonce
//     let amountFromTheClient=req.body.amount
//     gateway.transaction.sale({
//         amount: "10.00",
//         paymentMethodNonce: nonceFromTheClient,
//         amount: amountFromTheClient,
//         options: {
//           submitForSettlement: true
//         }
//       }, (err, result) => {
//           if(err){
//               res.status(500).json(console.error())
//           }
//           else{
//               res.json(result)
//           }
//       });
// }

var braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "3np8gd2brmkgjst2",
  publicKey: "42mhppnp9pm8x6qd",
  privateKey: "012096318acd0f7198bb4eaac5f8e582"
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;

  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,

      options: {
        submitForSettlement: true
      }
    },
    function(err, result) {
      if (err) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};
