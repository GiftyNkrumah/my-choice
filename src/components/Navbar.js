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
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarText'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <a className='nav-link' href='/dashboard'>Dashboard</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/tutorial'>Tutorial</a>
                        </li>
                    </ul>
                    <span className='navbar-text'>
                        <ul className='navbar-nav mr-auto'>
                            { isLogged?
                                <>
                                    <li className='nav-item dropdown'>
                                        <div className='nav-link dropdown-toggle' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                            {email}
                                        </div>
                                        <ul className='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdownMenuLink'>
                                            <li><a className='dropdown-item' href='/update'>Update profile</a></li>
                                            <li><a className='dropdown-item' href='/changepassword'>Change password</a></li>
                                            <li><hr className='dropdown-divider'/></li>
                                            <li><div className='dropdown-item' onClick={Logout} data-toggle='modal' data-target='#logout'>Log out</div></li>
                                        </ul>
                                    </li>
                                </> 
                                :
                                <>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/login'>Sign in</a>
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
        <div className='modal fade' id='logout' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog' role='document'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalLabel'>Confirmation</h5>
                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                    </button>
                </div>
                <div className='modal-body'>
                    Are you sure you want to log out?
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-secondary' onClick={Logout}>Yes</button>
                    <button type='button' className='btn btn-secondary' data-dismiss='modal'>No</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Navbar
