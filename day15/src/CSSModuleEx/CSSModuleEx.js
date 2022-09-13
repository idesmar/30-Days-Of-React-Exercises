import { useState } from 'react'
import moduleStyle from './cssModuleEx.module.css'


const { buttonDefault, buttonDefaultHover } = moduleStyle
// console.log(buttonDefault)

const ButtonCSSModule = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = (e) => {
    setIsHovered(prev => !prev)
    // console.dir(e.target)
  }

  return (
    <div>
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={isHovered ? `${buttonDefault} ${buttonDefaultHover}` : buttonDefault}
      >
        CSS Module
      </button>
    </div>
  )
}


export { ButtonCSSModule }
