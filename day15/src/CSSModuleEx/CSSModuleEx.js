import { useState } from 'react'
import moduleStyle from './cssModule.module.css'

/**
 * NOTE: Test button - The .button class takes effect when this module (CSSModuleEx) and ClassNamesEx Module are both active.
 * > This happens because the css attached ClassNamesEx is NOT a css module
 * this shows the possible conflict when not using css modules
 */


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

const TestButton = () => {

  return (
    <div>
      <button className='button'>
        Test Button
      </button>
    </div>
  )
}

export { ButtonCSSModule, TestButton }
