# 30 Days of React: Day 12 | Forms

### Dev Notes
<!-- * Folder Structure here -->
* only functional components are used hereafter
* started using a ***callback function*** approach to change the state rather than a direct approach which can sometimes leave the state to be incorrectly updated. <br/>**note:** in cases where values to be updated are buried deep within the state object, a snapshot approach is used. see example below found in [SignUpForm.js](./src//Level2/_Level2Custom/__SignUpForm/SignUpForm.js)
```javascript
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setData(prev => {
        /*  deep copy prev to snapshot,
            use snapshot to change desired state property value,
            then combine; essentially snapshot will replace prev */
        const snapshot = { ...prev }
        snapshot[name][value] = checked
        return { ...prev, ...snapshot }
      })
      /* Make sure to include return to prevent reaching default setData() */
      return
    }
    setData(prev => ({ ...prev, [name]: value }))
  }
```
* [shared](./src/shared/) components folder
  * [Fieldset.js](./src/shared/Fieldset.js) - contains a map that direct `props` (using switch statement) to the appropriate Reusable Input component
  * [Inputs.js](./src/shared/Inputs.js) - contains different custom input-type components:
    * text
    * radio-group > radio
    * checkbox-group > checkbox
    * date
    * select w/ options
    * email
    * password
* services > [userServices](./src/services/userServices.js)
  * Level 1 Q&A fetched from [level1qna.json](./public/data/level1qna.json)
  * countries fetched from https://[restcountries.com](https://restcountries.com)/v3.1/all
* [utils](./src/utils/) folder addition
  * [customValidation.js](./src/utils/customValidation.js) for validating inputs:
    * name format
    * email address format
    * username format
    * password and re-typed password match
