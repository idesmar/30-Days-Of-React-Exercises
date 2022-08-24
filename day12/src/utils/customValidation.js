const isNameFormatValid = (name) => {
  // source: https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
  const nameRegEx = /^[^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/ // ! test more
  return nameRegEx.test(name)
}

const isEmailValid = (email = '') => {
  const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
  return emailRegEx.test(email)
  /* regex from validator-js package
    new RegExp("^[a-z0-9._%-]+@[a-z0-9.-]*[a-z0-9]{1}\.[a-z]{2,4}$", "i")
   * regex = /^[a-z0-9._%-]+@[a-z0-9.-]*[a-z0-9]{1}\.[a-z]{2,4}$/i
  */
}

const isUsernameValid = (username = '') => {
  const usernameRegEx = /\w+/
  return usernameRegEx.test(username) && username.length >= 6
}

const isPasswordMatching = (password = '', password2 = '') => {
  return password && password2 && password === password2
}

export {
  isNameFormatValid,
  isEmailValid,
  isUsernameValid,
  isPasswordMatching,
}
