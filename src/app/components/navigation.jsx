import React from 'react'

import { Rubik } from 'next/font/google'

const rubik = Rubik({
    weight: '700',
    subsets: ['latin'],
})

function Navigation() {
  return (
    <nav className="flex flex-row items-center justify-around pt-1.5%">
        {/* Left side of navigation */}
        <div>
            <h1 className={rubik.className} style={{fontSize: '24px'}}>Brainwave.io</h1>
        </div>

        {/* right side of navigation */}
        <div>
            <ul className="flex justify-evenly items-center flex-row">
                <li className='pr-5%' style={{fontFamily: '__Inter_aaf875', fontWeight: 700,  color: '#161C2D', fontSize: '15px'}}>Demos</li>
                <li className='pr-5%' style={{fontFamily: '__Inter_aaf875', fontWeight: 700,  color: '#161C2D', fontSize: '15px'}}>Pages</li>
                <li className='pr-5%' style={{fontFamily: '__Inter_aaf875', fontWeight: 700,  color: '#161C2D', fontSize: '15px'}}>Support</li>
                <li className='pr-5%' style={{fontFamily: '__Inter_aaf875', fontWeight: 700,  color: '#161C2D', fontSize: '15px'}}>Contact</li>
                <li className='pr-5%' style={{fontFamily: '__Inter_aaf875', fontWeight: 700,  color: '#161C2D', whiteSpace: 'nowrap', fontSize: '15px'}}>Sign In</li>
                <a href="#" style={{fontFamily: '__Inter_aaf875', fontWeight: 700,  color: '#FFFFFF', whiteSpace: 'nowrap', fontSize: '17px', textDecoration: 'inherit', padding: '10px 25px;', background: '#473BF0', borderRadius: '12px'}}>Sign Up</a>
            </ul>
        </div>
    </nav>//
  )
}

export default Navigation