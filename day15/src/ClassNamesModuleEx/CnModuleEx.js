import { useState } from 'react'
import cn from 'classnames'
import cnModule from './cn.module.css'


const ButtonClassNamesModule = () => {

  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(prev => !prev)
  }

  const { cnButton, cnButtonHover } = cnModule

  const buttonClasses = cn({
    [cnButton]: true,
    [cnButtonHover]: isHovered,
  })

  return (
    <div>
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={buttonClasses}
      >
        ClassNames + Css Module
      </button>
    </div>
  )
}


export { ButtonClassNamesModule }
