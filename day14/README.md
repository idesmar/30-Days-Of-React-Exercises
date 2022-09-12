<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 14 | [Component Life Cycle](https://github.com/Asabeneh/30-Days-Of-React/blob/master/14_Day_Component_Life_Cycles/14_component_life_cycles.md)

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
- [Third Party Resources](#third-party-resources)
- [Other References](#other-references)

### Dev Notes
* styling done with mostly .css; styles copied from previous day (Day 13) with minor changes
* folders not containing primary components renamed by inserting trailing `_` (experimental)
* Component Life Cycle in table form with links to [official documentation](https://reactjs.org)

| Mounting | Updating | Unmounting |
| :------: | :------: | :--------: |
| [constructor(props)](https://reactjs.org/docs/react-component.html#constructor) | | |
| [static getDerivedStateFromProps (props, state)](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops) | [static getDerivedStateFromProps (props, state)](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops) | |
| | [shouldComponentUpdate (nextProps, nextState)](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) | |
| [render()](https://reactjs.org/docs/react-component.html#render) | [render()](https://reactjs.org/docs/react-component.html#render) | |
| | [getSnapshotBeforeUpdate (prevProps, prevState)](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate) | |
| [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount) | [componentDidUpdate (prevProps, prevState, snapshot)](https://reactjs.org/docs/react-component.html#componentdidupdate) | [componentWillUnmount()](https://reactjs.org/docs/react-component.html#componentwillunmount) |

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Learnings
* React Life Cycle Diagram <sup><a href="#1">[1]</a></sup>
![React Life Cycle Diagram](./src/_assets/react-life-cycle-diagram.png?raw=true)

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Third Party Resources
* Rest Countries API: https://[restcountries.com](https://restcountries.com)/v3.1/all

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>

### Other References
* [React Life Cycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) by [Wojciech MAJ](https://github.com/wojtekmaj) <sup id="1">[1]</sup>
* [React Components](https://reactjs.org/docs/react-component.html) official documentation

<div align="right"><sub><a href="#table-of-contents">[ Go to Table of Contents ]</a></sub></div>
