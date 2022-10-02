<!-- omit in TOC -->
# [30 Days of React](../README.md#readme): Day 10 | [React Folder Structure](https://github.com/Asabeneh/30-Days-Of-React/blob/master/10_React_Project_Folder_Structure/10_react_project_folder_structure.md#readme)

<!-- omit in TOC -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Folder Structure](#folder-structure)

### Dev Notes
* [CSS reset - version 1.7.2](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* Styling done mostly inline (javascript)
* Q&A now in .json format and being fetched from public/. see [level1qna.json](./public/data/level1qna.json)
* Included *globalStyles.js* and *icons.js* to assets
  * *globalStyles.js* includes styling and a colors object to easily get value through mapping `colors[property][theme]`
    ```javascript
    const colors = {
      fColor: {
        light: '#000000',
        dark: '#5fdbfc',
      },
      bgColor: {
        light: '#ffffff',
        dark: '#0f172a',
      },
      headerBgColor: {
        light: '#5fdbfc',
        dark: '#0f172a',
      },
      buttonBgColor: {
        light: '#0f172a',
        dark: '#5fdbfc',
      },
      buttonFColor: {
        light: '#5fdbfc',
        dark: '#0f172a',
      },
    }
    ```
  * *icons.js* has an icons object that returns an svg by mapping `icons[iconName]`
* utils/ folder, previously lib/, holds categorized custom javascript functions
  * *colorFunc.js*
  * *hasCode.js*
  * *makeID.js*
  * *misc.js*
  * *unitConvert.js*

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Folder Structure
Currently still experimenting with different structures\
Using the ff. folder names as an experiment so they may still change in the future
* ***assets*** - now also stores global styles (ie. *globalStyles.js*)
* ***services*** - fetching data (ie. *level1qna.json*)
* ***shared*** - shareable components (ie. *Button*, *Details*, *SuperficialButton*)
* ***utils*** - previously referred to as lib/ that holds custom javascript functions

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>
