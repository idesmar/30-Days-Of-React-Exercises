<!-- omit in toc -->
# Custom Made Library

<hr/>
<details id="toc">
  <summary style='cursor: pointer;'>Click for Table of Contents</summary>

<!-- omit in toc -->
## Table of Contents
- [Description](#description)
- [Libraries included](#libraries-included)
  - [colorFunc](#colorfunc)
  - [customValidation](#customvalidation)
  - [hasCode](#hascode)
  - [hasLink](#haslink)
  - [loggerAssist](#loggerassist)
  - [makeID](#makeid)
  - [misc](#misc)
  - [qnaJSON_builder](#qnajson_builder)
  - [unitConvert](#unitconvert)
</details>
<hr/>

## Description
This folder contains the most up to date utils being used in the entire repository. Each sub-repo has a version of utils and it evolves almost every time a new sub-repo is created; refactoring code or creating a new one to assist with the project.

## Libraries included

### [colorFunc](./colorFunc.js)
Functions related to colors
### [customValidation](./customValidation.js)
Custom Validation
### [hasCode](./hasCode.js)
Returns a styled JSX fragment based on a string input that contains strings enclosed in ` `` `. Primarily used when turning strings from `level1qna.json` to JSX Elements
### [hasLink](./hasLink.js)
Returns a styled anchor tag based on a string input that contains `[label](URI)`. Primarily used when turning strings from `level1qna.json` to JSX Elements
### [loggerAssist](./loggerAssist.js)
Functions that aid with logging. This contains timestamps and reference generation
### [makeID](./makeID.js)
***DO NOT USE as a key value for React Components*** . Although the initial use of this code is to create a key for React Components, it is highly advised not to use it as such. This code was created prior to the latter stated knowledge. This file remains for documenting previous learnings. Feel free to use the code on ***appropriate cases only***.
### [misc](./misc.js)
This is an assortment of functions that currently do not fall on any of the other categories. Functions currently listed are the ff:
* seqNumsArr
* isPrime, isPrime0, isEven, isOdd
* toTitleCase, toProperCase, toProperCaseDelimited
### [qnaJSON_builder](./qnaJSON_builder.js)
This file should only be ran in ***node*** to help with creating content in `level1qna.json` from an array of questions. This may be refactored in the future to spit out a json file instead of only the content. Run by using the CLI command below:
```bash
node qnaJSON_builder.js
```
### [unitConvert](./unitConvert.js)
Functions that help with css unit conversion `{ rem, rem4, deRem, em }`
