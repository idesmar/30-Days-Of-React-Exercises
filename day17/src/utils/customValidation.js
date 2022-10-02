const getPatterFromRegEx = (regex = RegExp()) => (
  regex.toString().slice(1, regex.toString().length - 1)
)

/* https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name */
const nameRegEx = /^[^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/ // ? more testing
const isNameFormatValid = (name) => {
  return nameRegEx.test(name)
}
const namePattern = getPatterFromRegEx(nameRegEx)

const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,4})+$/
const isEmailValid = (email = '') => {
  return emailRegEx.test(email)
  /* regex from validator-js package (uninstalled package)
    new RegExp("^[a-z0-9._%-]+@[a-z0-9.-]*[a-z0-9]{1}\.[a-z]{2,4}$", "i")
   * regex = /^[a-z0-9._%-]+@[a-z0-9.-]*[a-z0-9]{1}\.[a-z]{2,4}$/i
  */
}
const emailPattern = getPatterFromRegEx(emailRegEx)

const usernameRegEx = /\w+/
const isUsernameValid = (username = '') => {
  return usernameRegEx.test(username) && username.length >= 6
}
const usernamePattern = getPatterFromRegEx(usernameRegEx)

const isPasswordMatching = (password = '', password2 = '') => {
  return password && password2 && password === password2
}

export {
  namePattern,
  usernamePattern,
  emailPattern,
  isNameFormatValid,
  isEmailValid,
  isUsernameValid,
  isPasswordMatching,
}
