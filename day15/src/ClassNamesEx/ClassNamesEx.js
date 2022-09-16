import { useState } from 'react'
import cn from 'classnames' /* used `cn` to easily distinguish className from classNames */
import './classNames.css'

/* DEV NOTES
  * using regular css (NOT css modules) may cause styling conflicts as tested in CSSModuleEx
*/


const ButtonClassNames = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(prev => !prev)
  }

  const buttonClasses = cn({
    'button': true,
    'button-hover': isHovered,
  })

  return (
    <div>
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={buttonClasses}
      >
        ClassNames
      </button>
    </div>
  )
}


export { ButtonClassNames }
