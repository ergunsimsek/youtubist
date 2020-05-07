import React from 'react'

const Layout = (props) => {
    return (
        <div className={`hero-sec ${props.className}`}>
          <div className="container">
              <div className="hero">
                  {props.children}
              </div>
          </div>
      </div>
    )
}

export default Layout