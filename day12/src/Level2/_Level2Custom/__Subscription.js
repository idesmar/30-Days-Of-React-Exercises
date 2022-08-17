import { useState } from "react"
import { Fieldset } from "../shared/_Fieldset"


const Subscription = ({ onComponentChange }) => {

  const [subscriptionDetails, setSubscriptionDetails] = useState(
    {
      legend: 'Subscription Details',
      inputs: [
        {
          name: 'plan',
          type: 'radio',
          values: ['free', 'free+', 'free++'],
          value: ''
        },
        {
          name: 'notification',
          type: 'checkbox',
          values: ['promotions', 'newsletter', 'updates'],
          value: []
        },
      ]
    }
  )

  return (
    <></>
  )
}

export { Subscription }
