import React, { useState, useRef, useEffect } from "react"
function Payement(props) {
  const [paid, setPaid] = useState(false)
  const [error, setError] = useState(null)

  const paypalRef = useRef()
  // const price = this.props.price
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Payement",
                amount: {
                  currency_code: "EUR",
                  value: props.total,
                },
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          setPaid(true)
          console.log(order)
        },
        onError: (err) => {
          //  setError(err),
          console.error(err)
        },
      })
      .render(paypalRef.current)
  }, [])
  if (paid) {
    return <h2>Payement effectuer!</h2>
  }

  if (error) {
    return <div>Payement refuser merci de reessayer</div>
  }
  return <div ref={paypalRef} />
}
export default Payement
