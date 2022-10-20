<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 18 | [Fetch and Axios](https://github.com/Asabeneh/30-Days-Of-React/blob/master/18_Fetch_And_Axios/18_fetch_axios.md#readme)

<hr/>
<details id="toc">
  <summary style='cursor: pointer;'>Click for Table of Contents</summary>

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
- [Third Party Packages / Resources](#third-party-packages--resources)
- [Other References and Good Reads](#other-references-and-good-reads)
</details>
<hr/>

## Dev Notes
* [CSS reset - version 1.7.3](https://github.com/elad2412/the-new-css-reset) by [@elad2412](https://github.com/elad2412) used
* React Router used for multi-page like SPA
* Added `refGenerator` that creates a reference (`Ref-[n]`) and a ***global*** reference `refGlobal` in [misc.js](./src/utils/misc.js) to aid with tracking `useEffect` + `fetch`/`axios`. This is intended to be used along with `getTimestamp` --- which outputs `[hh:mm]-[ss.ms] [optionalMsg]` (also a custom function in the same module)
* Used `react-icons` library for svg assets
* Used `loading="lazy"` on images fetched from [API](https://api.thecatapi.com/v1/breeds)

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

## Learnings

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

## Third Party Packages / Resources
<!-- cspell: disable -->
| Package | Installation  | Website | Github |
| :------ | :------------ | :------ | :----- |
| axios   | `npm i axios` | [axios-http.com](https://axios-http.com/docs/intro) | [axios](https://github.com/axios/axios#readme) |
| react router dom | `npm i react-router-dom` | [reactrouter.com](https://reactrouter.com/) | [remix-run/react-router](https://github.com/remix-run/react-router#readme) |
| react-icons | `npm i react-icons` | [react-icons.github.io](https://react-icons.github.io/react-icons) | [react-icons](https://github.com/react-icons/react-icons#readme) |
<!-- cspell: enable -->

[^size]: [import cost](https://github.com/wix/import-cost) to determine size of imported package

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

## Other References and Good Reads
<!-- cspell: disable -->
* [HTTP Overview](https://www.tutorialspoint.com/http/http_overview.htm) from tutorialspoint.com
* [What is HTTP?](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/) from Cloudflare
* [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) from MDN
* [Axios vs. fetch(): Which is best for making HTTP requests?](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/) by [Faraz Kelhini](https://blog.logrocket.com/author/farazkelhini/)
<!-- cspell: enable -->

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>
