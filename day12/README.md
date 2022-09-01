<div id="top"></div>

# 30 Days of React: Day 12 | Forms

<style>
  #toc * { box-sizing: border-box; }
  #toc {
    width: max-content;
    width: 20rem;
    max-width: 100%;
    margin-bottom: 2rem;
  }
  #toc summary {
    font-weight: 600;
    list-style: none;
    cursor: pointer;
    border: 3px double;
    padding: 0 1rem;
  }
  #toc > ul {
    padding: 1rem 3rem;
    border: 1px solid;
  }
  #toc > ul > ul {
    padding-left: 2rem;
  }
</style>

<details id="toc" open>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#dev-notes">Dev Notes</a></li>
    <li><a href="#learnings">Learnings</a></li>
    <ul>
      <li><a href="#look-back-learnings">Look-back Learnings</a></li>
    </ul>
    <li><a href="#installed-packages">Installed Packages</a></li>
  </ul>
</details>

### Dev Notes
<!-- * Folder Structure here -->
* only functional components are used hereafter
* started using a ***callback function*** approach to change the state rather than a direct approach which can sometimes leave the state to be incorrectly updated. <br/>**note:** in cases where values to be updated are buried deep within the state object, a snapshot approach is used. see example below found in [SignUpForm.js](./src//Level2/_Level2Custom/__SignUpForm/SignUpForm.js)
```javascript
const handleChange = (e) => {
  const { name, value, type, checked } = e.target
  if (type === 'checkbox') {
    /** process
     * deep copy prev to snapshot,
     * change needed property in snapshot
     * combine prev and snapshot object,
       essentially snapshot replaces prev */
    setData(prev => {
      const snapshot = { ...prev }
      snapshot[name][value] = checked
      return { ...prev, ...snapshot }
    })
    /* Make sure to include return to
    prevent reaching default setData() */
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
* Controlled and Uncontrolled inputs
  * Controlled inputs:
    * firstName
    * lastName
    * email
    * userName
  * Uncontrolled inputs:
    * gender (radio)
    * dob
    * plan (radio)
    * notifications (checkbox)
    * passwords

  <small style="font-size: 0.9em; font-style: italic;">
    note: <em style="font-weight: bold;">select</em> elements are not considered as input elements hence it is not included here; tested in `onBlur` event handler using:
  </small>

  ```javascript
  console.log(e.target.name, e.target._wrapperState.controlled)
  // result: country undefined
  ```

<p align="right"><a href="#top">[Back to top]</a></p>

### Learnings
* `noValidate` on **form** element removes the effect of `required` attribute in enclosed input elements `onSubmit`.
* `selected` attribute in `option` is not advised, encountered warning below:
  ```console
  Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
  ```
  while using code below:
  ```jsx
  <option selected disabled >
    Select validation type
  </option>
  ```
  fixed using:
  ```jsx
    <select defaultValue='default' >
      <option
        value='default'
        disabled
      >
        Select validation type
      </option>
      {<!-- other options here -->}
    </select>
  ```

  #### Look-back Learnings
  * `required` attribute in at least one `input[type=radio]` will apply to the entire radio group (under same name)

<p align="right"><a href="#top">[Back to top]</a></p>

### Installed Packages
* [validator](https://github.com/validatorjs/validator.js#validators) - as advised by source material
```bash
npm i validator
```

<p align="right"><a href="#top">[Back to top]</a></p>
