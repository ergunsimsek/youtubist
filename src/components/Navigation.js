import React from 'react'
import { NavLink } from 'react-router-dom'




const Navigation = ({ collapsed, lang }) => {
    return (
        <ul className="h-menu">
            <li>
                <NavLink onClick={collapsed} to={'/ourwork'} activeClassName="active">
                    {lang === 'en' ? 'Our work' : 'projeler'}
                </NavLink>
            </li>
            <li>
                <NavLink onClick={collapsed} to={'/ourstory'} activeClassName="active">
                    {lang === 'en' ? 'our story' : 'hikayemiz'}
                </NavLink>
            </li>
            <li>
                <NavLink onClick={collapsed} to={'/legal'} activeClassName="active">
                    {lang === 'en' ? 'legal' : 'yasal'}
                </NavLink>
            </li>
            <li>
                <a target="_blank" href="https://jobs.lever.co/youtubist">
                    {lang === 'en' ? 'jobs' : 'kariyer'}
                </a>
            </li>
        </ul>
    )
}
export default Navigation
