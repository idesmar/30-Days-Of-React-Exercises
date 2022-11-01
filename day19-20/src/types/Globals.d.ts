/*
  Note: This project was initiated WITHOUT `--template typescript`
  Declaration removes error (in next line) when importing css modules
  `Cannot find module '*.modules.css' or its corresponding type declaration`
  > Initialization with `--template typescript` does not require the declaration below
 */
declare module "*.module.css";


/* Use as bookmark for types/situation not yet familiar with */
type FixMeLater = any
