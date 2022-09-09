const Confirmation = ({
  userData: {
    firstName,
    lastName,
    gender,
    dob,
    country,
    plan,
    notifications,
    email,
    username,
  },
  handleSignUp,
}) => {

  return (
    <>
      <div>
        <h4>Personal Information</h4>
        <p>Full Name: {`${firstName} ${lastName}`}</p>
        <p>Gender: {gender}</p>
        <p>Date of birth: {dob}</p>
        <p>Country: {country}</p>
      </div>
      <div>
        <h4>Subscription</h4>
        <p>Plan: {plan}</p>
        <p>Notifications: {notifications.length ? notifications.join(',') : 'none'}</p>
      </div>
      <div>
        <h4>Credentials</h4>
        <p>Email: {email}</p>
        <p>Username: {username}</p>
      </div>
      <button onClick={handleSignUp}>Sign up</button>
    </>
  )
}


export { Confirmation }
