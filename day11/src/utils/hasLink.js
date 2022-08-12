import makeID from './makeID'

const Link = ({ text, href }) => (
  <a
    href={href}
    style={{
      textDecoration: 'none',
      color: 'inherit',
      backgroundColor: 'green',
    }}
  >
    {text}
  </a>
)

// Note: return value is a fragment
const hasLink = (str = '') => {
  // NOTE: create a separate checker if the string has a link: hasLinkChecker
  const mdLinkRegEx = /\[(.+?)\]\((.+?)\)/ // ? i: ignore case, g: global, m: multiline
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