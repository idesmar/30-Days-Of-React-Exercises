# 30 Days of React: Day 12 | Forms

### Dev Notes
<!-- * Folder Structure here -->
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
