<!-- omit in toc -->
# [30 Days of React](../README.md#readme): Day 18 | [Fetch and Axios](https://github.com/Asabeneh/30-Days-Of-React/blob/master/18_Fetch_And_Axios/18_fetch_axios.md#readme)

<hr/>
<details id="toc">
  <summary style='cursor: pointer;'>Click for Table of Contents</summary>

<!-- omit in toc -->
## Table of Contents
- [Dev Notes](#dev-notes)
- [Learnings](#learnings)
  - [HTTP Requests](#http-requests)
    - [`GET`](#get)
    - [`POST`](#post)
    - [`PUT`](#put)
    - [`DELETE`](#delete)
  - [React Query - GET Request](#react-query---get-request)
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
* Used React Query for fetching data
  * This is more of an introduction to React Query: Fetching data only
  * Also installed `react-query-devtools` to get a feel for it

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

## Learnings

### HTTP Requests
> **NOTE**: <br>
> * These are only guidelines and ***not everyone may follow it***
> * Ultimately, request handling is dependent on the server's setup
#### `GET`
Request to receive data from the server
#### `POST`
Request to add a new entry on the server
#### `PUT`
Request to create or replace an entry on the server with the representation enclosed in the request body
#### `DELETE`
Request to delete an entry on the server

### React Query - GET Request
* Fetching data from server/API without `useEffect` and `useState`; resulting to simpler code
* Basic syntax for `useQuery`
  ```
  useQuery([queryKeys], queryFn, {...options})
  ```
  * [queryKeys](https://tanstack.com/query/v4/docs/guides/query-keys)
  * [queryFn](https://tanstack.com/query/v4/docs/guides/query-functions)
  * [{ ...options }](https://tanstack.com/query/v4/docs/reference/useQuery)
* Some good to know about React Query as quoted from the [official docs](https://tanstack.com/query/v4/docs/guides/important-defaults):
  <div style="font-style: italic;">

  > Out of the box, React Query is configured with aggressive but sane defaults. Sometimes these defaults can catch new users off guard or make learning/debugging difficult if they are unknown by the user. Keep them in mind as you continue to learn and use React Query:
  > * Query instances via `useQuery` or `useInfiniteQuery` by default consider cached data as stale
  > * Stale queries are refetched automatically in the background when:
  >   - New instances of the query mount
  >   - The window is refocused
  >   - The network is reconnected.
  >   - The query is optionally configured with a refetch interval.
  </div>
  <br>

  > As a result, an optional property was used to limit data querying
  > ```
  > { refetchOnWindowFocus: false }
  > ```

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

## Third Party Packages / Resources
<!-- cspell: disable -->
| Package | Installation  | Website | Github |
| :------ | :------------ | :------ | :----- |
| axios   | `npm i axios` | [axios-http.com](https://axios-http.com/docs/intro) | [axios](https://github.com/axios/axios#readme) |
| react router dom | `npm i react-router-dom` | [reactrouter.com](https://reactrouter.com/) | [remix-run/react-router](https://github.com/remix-run/react-router#readme) |
| react-icons | `npm i react-icons` | [react-icons.github.io](https://react-icons.github.io/react-icons) | [react-icons](https://github.com/react-icons/react-icons#readme) |
| react-query | `npm i @tanstack/react-query` | [tanstack.com](https://tanstack.com/query/v4/docs/overview) | [tanstack/query](https://github.com/tanstack/query#readme) |
| react-query-devtools | `npm i @tanstack/react-query-devtools` | [tanstack.com](https://tanstack.com/query/v4/docs/devtools) | [tanstack/query](https://github.com/tanstack/query#readme) |

* [thecatapi.com](https://api.thecatapi.com/v1/breeds) <!-- cspell: enable -->
for getting cat data

[^size]: [import cost](https://github.com/wix/import-cost) to determine size of imported package

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>

## Other References and Good Reads
<!-- cspell: disable -->
* [HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110) - Official Docs
* [HTTP Overview](https://www.tutorialspoint.com/http/http_overview.htm) from tutorialspoint.com
* [What is HTTP?](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/) from Cloudflare
* [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) from MDN
* [Axios vs. fetch(): Which is best for making HTTP requests?](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/) by [Faraz Kelhini](https://blog.logrocket.com/author/farazkelhini/)
<!-- cspell: enable -->

<div align="right"><sub><a href="#toc">[ Go to Table of Contents ]</a></sub></div>
