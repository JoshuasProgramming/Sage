import React from 'react'

function Navigation() {
  return (
    <nav className="flex flex-row items-center justify-around pt-1.5%">
        {/* Left side of navigation */}
        <div>
            <h1>Brainwave.io</h1>
        </div>

        {/* right side of navigation */}
        <div>
            <ul className="flex justify-evenly items-center flex-row">
                <li className='pr-5%'>Demos</li>
                <li className='pr-5%'>Pages</li>
                <li className='pr-5%'>Support</li>
                <li className='pr-5%'>Contact</li>
                <li className='pr-5%' style={{whiteSpace: 'nowrap'}}>Sign In</li>
                <a href="#"  style={{whiteSpace: 'nowrap'}}>Sign Up</a>
            </ul>
        </div>
    </nav>//
  )
}

export default Navigation