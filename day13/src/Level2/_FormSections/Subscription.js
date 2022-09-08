import { useRef } from "react"

/* //* Subscription details
Plan             --- radio button [ free, free+, free++ ]
Notifications    --- checkbox [ promotions, newsletter, updates ]
*/

const Subscription = ({
  updateUserData,
}) => {

  const subscriptionInfo = {
    plan: useRef(),
    notifications: {
      promotions: useRef(),
      newsletter: useRef(),
      updates: useRef(),
    },
  }

  const {
    plan,
    notifications: {
      promotions,
      newsletter,
      updates,
    },
  } = subscriptionInfo

  const handleFormSubmit = (e) => {
    e.preventDefault()
    /* alt to passing argument "formDescription" to userUpdateData
      * opted to hardcoding "formDescription" since data-* is exposed in html and unsure if it can be a DevSec risk
      const { dataset } = e.target
      const formDescription = Object.keys(dataset).toString() */
    updateUserData(subscriptionInfo, 'subscription')
  }

  return (
    <form onSubmit={handleFormSubmit} data-subscription>
      <fieldset>
        <legend>Subscription Details</legend>
        <div>
          <p>Choose Plan</p>
          <div>
            <div>
              <input
                type="radio"
                name="plan"
                id="free"
                required
                ref={plan}
                value='free'
              />
              <label htmlFor="free"> Free</label>
            </div>
            <div>
              <input
                type="radio"
                name="plan"
                id="freePlus"
                required
                ref={plan}
                value='freePlus'
              />
              <label htmlFor="freePlus"> Free+</label>
            </div>
            <div>
              <input
                type="radio"
                name="plan"
                id="freePlusPlus"
                required
                ref={plan}
                value='freePlusPlus'
              />
              <label htmlFor="freePlusPlus"> Free++</label>
            </div>
          </div>
        </div>
        <div>
          <p>Choose Notification</p>
          <div>
            <input
              type="checkbox"
              name="notification"
              id="promotions"
              ref={promotions}
              value='promotions'
            />
            <label htmlFor="promotions"> Promotions</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="notification"
              id="newsletter"
              ref={newsletter}
              value='newsletter'
            />
            <label htmlFor="newsletter"> Newsletter</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="notification"
              id="updates"
              ref={updates}
              value='newsletter'
            />
            <label htmlFor="updates"> Updates</label>
          </div>
        </div>
      </fieldset>
      <button>Next</button>
    </form>
  )
}

export { Subscription }
