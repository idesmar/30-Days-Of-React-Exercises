import { forwardRef } from 'react'
import { NavLink as BaseNavLink } from 'react-router-dom'

/* //> Custom NavLink Code
  Modified version from react router official docs
  https://reactrouter.com/en/main/components/nav-link
*/
/* //> ORIGINAL CODE from source:
import * as React from "react";
import { NavLink as BaseNavLink } from "react-router-dom";

const NavLink = React.forwardRef(
  ({ activeClassName, activeStyle, ...props }, ref) => {
    return (
      <BaseNavLink
        ref={ref}
        {...props}
        className={({ isActive }) =>
          [
            props.className,
            isActive ? activeClassName : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
        style={({ isActive }) => ({
          ...props.style,
          ...(isActive ? activeStyle : null),
        })}
      />
    );
  }
);
*/


const activeLink = {
  backgroundColor: '#760817',
  color: '#7edf7e',
}

const CustomNavLink = forwardRef(
  ({ activeStyle, ...props }, ref) => {
    return (
      <BaseNavLink
        ref={ref}
        {...props}
        style={({ isActive }) => ({
          ...props.style,
          ...(isActive ? activeLink : undefined)
        })}
      />
    );
  }
);


export { CustomNavLink }
