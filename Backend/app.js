const express = require("express");
const app = express()
const cors = require('cors');
const emailSender = require('./emailSender')
const jwt = require('jsonwebtoken')

const stripe = require("stripe")("sk_test_51MRWetSCRNV56biHlD9BdJYIOJChs83KBB8s41d6mo3AQuXacMkrKmecoRNFiOcU3QkBqBveFf9xlOrLLtn9nZXu00LmQbADE4");

const uuid = require('uuid').v4


app.use(express.json()); // to support JSON-encoded bodies

app.use(cors());


app.post('/sendforgotmail', async (req, res) => {

  if (req.body == null) {
    return res.status(500).send({ "msg": "Bosy Not Get" })
  }
  const fromemail = req.body.from_email;
  const toEmail = req.body.to_email;
  const token = req.body.token;


  let msg = 'Please Visit this site to reset Your Password :http://localhost:3000/resetpassword/' + token;

  emailSender.sendEmail(fromemail, toEmail, null, 'Reset password Link', msg)
  res.status(200).send({ "msg": "Mail Sent Successfully" })
})

app.post('/getToken', async (req, res) => {

  const email = req.body.email;
  const token = await jwt.sign({ email: email.toString() }, 'This_Is_My_Secret_Key');

  res.status(200).send({ "msg": "Token Generated Successfully", "token": token })

})


app.post('/payment', async (req, res) => {


  const { product, token } = req.body;
  const email = token.email;
  const source = token.source;
  console.log(email)
  console.log(source)

  

  const idempotencyKey = uuid();

  try {
    
          return stripe.customers.create({ email: email, source: source }).then(
            
            (customer) => 
              {
                stripe.charges.create(
                  {
                    amount: product.price,
                    currency: 'usd',
                    customer: customer.id,
                    receipt_email: token.email,
                    description: product.name,
                      shipping: {
                        name: token.card.name,
                      }
                  }, 
                  { idempotencyKey:idempotencyKey })
              }
          ).then(
            result => {
            res.status(200).json(result)
          }).catch(
            (error) => {
            console.log(error);
            res.status(500).json({ "error" :"error"})
          })

        //new code start

        // const session= await stripe.checkout.sessions.create({
        //   payment_method_types:['card'],
        //   mode:'payment',
        //   line_items:req.body.product,
        //   success_url:'http://localhost:3000',
        //   cancel_url:'',
        // })


        //new code end


  } catch (error) {
      console.log(error)
  }
      
}
)

app.listen(2000, () => {
  console.log("Server Running on Port:", 2000);
});