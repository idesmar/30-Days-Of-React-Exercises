import makeID from './makeID'
import { rem } from './unitConvert'

const Link = ({ text, href }) => (
  <a
    href={href}
    style={{
      textDecoration: 'none',
      color: '#ffffff',
      backgroundColor: 'green',
      borderRadius: rem(8),
      paddingInline: rem(10),
    }}
  >
    {text}
  </a>
)

// Note: return value is a fragment
const hasLink = (str = '') => {
  // NOTE: create a separate checker if the string has a link: hasLinkChecker
  const mdLinkRegEx = /\[(.+?)\]\((.+?)\)/gim
  // ? flags i: ignore case, g: global, m: multiline
  const destructuredStr = str.split(mdLinkRegEx)

  return (
    <>
      {
        destructuredStr.map((el, idx, arr) => {
          // return plain text section
          if (idx % 3 === 0) return el

          // ignore (href) section of markdown link format
          if (idx % 3 === 2) return ''

          return (
            <Link
              key={'link' + makeID()}
              text={el}                 // [text]
              href={arr[idx + 1]}       // (href)
            />
          )
        })
      }
    </>
  )
}

export default hasLink