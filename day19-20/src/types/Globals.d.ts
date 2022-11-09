/*
  Note: This project was initiated WITHOUT `--template typescript`
  Declaration removes error (in next line) when importing css modules
  `Cannot find module '*.modules.css' or its corresponding type declaration`
  > Initialization with `--template typescript` does not require the declaration below
 */
declare module "*.module.css";


/* Use as bookmark for types/situation not yet familiar with */
type FixMeLater = any

RefObject<MutableRefObject<undefined>>

/*
Type 'MutableRefObject<undefined>' is not assignable to type 'LegacyRef<HTMLInputElement> | undefined'.
  Type 'MutableRefObject<undefined>' is not assignable to type 'RefObject<HTMLInputElement>'.
    Types of property 'current' are incompatible.
      Type 'undefined' is not assignable to type 'HTMLInputElement | null'.ts(2322)
index.d.ts(137, 9): The expected type comes from property 'ref' which is declared here on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement
*/
