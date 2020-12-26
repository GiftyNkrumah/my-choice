import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'
import Logo from '../images/logo.png'

function Navbar() {

    const { email, isLogged, setLogged } = useContext(LoginContext)
    let history = useHistory()

    function Logout(event) {
        event.preventDefault()
        setLogged(false)
        
        history.push('/')
    }

    return ( 
        <div>
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
                </ul>
                <span className="navbar-text">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        { isLogged?
                            <>
                                <li className='nav-item dropdown'>
                                    <div className='nav-link dropdown-toggle' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                        {email}
                                    </div>
                                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                        <li><a className='dropdown-item' href=''>Action</a></li>
                                        <li><a className='dropdown-item' href='/update'>Edit profile</a></li>
                                        <li><hr className='dropdown-divider'/></li>
                                        <li><a className='dropdown-item' onClick={Logout} data-toggle="modal" data-target="#exampleModal">Log out</a></li>
                                    </ul>
                                </li>
                            </> 
                            :
                            <>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/login'>Log in</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/signup'>Create account</a>
                                </li>
                            </>
                        }
                    </ul>
                </span>
                </div>
            </div>
        </nav>

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Are you sure you want to log out?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light">Yes</button>
                    <button type="button" className="btn btn-light" data-dismiss="modal">No</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Navbar
