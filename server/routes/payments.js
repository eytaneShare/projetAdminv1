const express = require('express')
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk')

let clientId = "AZucxtHg72AqV00moDR4Q4eJoZOcsZOMe2RS5NUIY50QNB47M4K9v-mjJ63SKSbAYPpYrYqdz6dt9ehE";
let clientSecret = "EHO-lJ53lnnnKPN3hBzehH8GC41yQ0FD7JOoezkerdXpzw1-Ss04kbb8gMebh-XpoowdtWprJ7QhYaZs";

let environment = new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
let client = new checkoutNodeJssdk.core.PayPalHttpClient(environment)

const router = express.Router()

router.post('/checkout_action', (req, res) => {
    checkoutNodeJssdk.configure()
    const orderID = req.body.orderID;

  // 3. Call PayPal to create the authorization
  const request = new checkoutNodeJssdk.orders.OrdersAuthorizeRequest(orderID);
  request.requestBody({});

  try {
    const authorization = await payPalClient.client().execute(request);

    // 4. Save the authorization ID to your database
    const authorizationID = authorization.result.purchase_units[0]
        .payments.authorizations[0].id
    // await database.saveAuthorizationID(authorizationID);

  } catch (err) {

    // 5. Handle any errors from the call
    console.error(err);
    return res.send(500);
  }

  // 6. Return a successful response to the client
  res.send(200);
})
