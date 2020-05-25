import React from 'react'
import { NavLink } from 'react-router-dom'




const NavigationTR = (props) => {
    return (
        <ul className="h-menu">
            <li>
                <NavLink onClick={props.collapsed} to={'/tr/ourwork'} activeClassName="active">
                    projeler
                </NavLink>
            </li>
            <li>
                <NavLink onClick={props.collapsed} to={'/tr/ourstory'} activeClassName="active">
                    hikayemiz
                </NavLink>
            </li>
            <li>
                <NavLink onClick={props.collapsed} to={'/tr/legal'} activeClassName="active">
                    masal
                </NavLink>
            </li>
            <li>
                <a target="_blank" href="https://jobs.lever.co/youtubist">
                    kariyer
                </a>
            </li>
        </ul>
    )
}
export default NavigationTR
