import React from 'react'
import Logo from '../images/logo.png'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light' style={{backgroundColor: 'whitesmoke'}}>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>
                    <img src={Logo} alt='' width='30' height='24' className='d-inline-block align-top'/>
                    myChoice
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/dashboard'>Dashboard</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/tutorial'>Tutorial</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/login'>Log in</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/signup'>Create account</a>
                    </li>
                    <li className='nav-item dropdown'>
                        <div className='nav-link dropdown-toggle' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            Username
                        </div>
                        {/* <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <li><a className='dropdown-item' href='#'>Action</a></li>
                            <li><a className='dropdown-item' href='#'>Another action</a></li>
                            <li><hr className='dropdown-divider'/></li>
                            <li><a className='dropdown-item' href='#'>Something else here</a></li>
                        </ul> */}
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar
