import { MdDownloading as DownloadingIcon } from 'react-icons/md'
import { IconContext } from "react-icons"

/*
  Configuring react-icons svg https://github.com/react-icons/react-icons#configuration

  | Key       |	Default	            | Notes                              |
  |:----------|:--------------------|:-----------------------------------|
  | color     |	undefined (inherit) |                                    |
  | size      |	1em                 |                                    |
  | className |	undefined           |                                    |
  | style     |	undefined           |	Can overwrite size and color       |
  | attr      |	undefined           |	Overwritten by other attributes    |
  | title     |	undefined           |	Icon description for accessibility |

*/


const ReactIcons = () => {

  return (
    <section className='section'>
      <h3>React Icons</h3>

      <DownloadingIcon />

      <p>import &#123; IconContext &#125; from "react-icons"</p>
      <IconContext.Provider
        value={{ color: "blue", size: "2em", }}
      >
        <DownloadingIcon />
      </IconContext.Provider>
    </section>
  )
}


export { ReactIcons }
