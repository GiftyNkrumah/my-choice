import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'

export default function Signup() {

    // Declaration of variables
    const { setLogged, email, setEmail } = useContext(LoginContext)
    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [lastname, setLastname] = useState('')
    const [inst, setInst] = useState('')
    const [actype, setActype] = useState('')
    const [web, setWeb] = useState('')
    const [pass, setPass] = useState('')
    const [conf, setConf] = useState('')

    let history = useHistory()

    // Validation
    function Validation (event) {
        if (firstname !== '' && lastname !== '' && email !== '' && actype !== 'Choose...' && pass !== '' && conf !== '') { 
            if (pass === conf) {
                event.preventDefault()
                setLogged(true)
                history.push('/')        
            }   else {
                alert('Password must be equal to confirmation')
            }
        } else {
            alert('Please fill out all relevant fields')
        }
    }

    return (
        <div className='all'>
        <h3>Create a new account</h3>
        <br/>
        <form onSubmit={Validation}>
            <div className='row'>
                <div className='col'>
                    <label>First name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        onChange={(e) => setFirstname(e.target.value)} 
                        required
                    />
                    </div>
                <div className='col'>
                    <label>Middle name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        onChange={(e) => setMiddlename(e.target.value)}
                    />
                </div>
                <div className='col'>
                    <label>Last name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>
            </div><br/>
            <div className='row'>
                <div className='col col-md-9'>
                    <label>Name of institution (Optional)</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        onChange={(e) => setInst(e.target.value)}
                    />
                </div>
                <div className='col col-md-3'>
                    <label>Type of account</label>
                    <select 
                        id='inputState' 
                        className='form-control' 
                        onChange={(e) => setActype(e.target.value)}
                        required
                    >
                        <option defaultValue>Choose...</option>
                        <option>Personal</option>
                        <option>Academic</option>
                        <option>Business</option>
                        <option>Other</option>
                    </select>
                </div>
            </div><br/>
            <div className='row'>
                <div className='col'>
                    <label>Email address</label>
                    <input 
                        type='email' 
                        className='form-control' 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                <div className='col'>
                    <label>Website (Optional)</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        onChange={(e) => setWeb(e.target.value)}
                    />
                </div>
            </div><br/>
            <div className='row'>
                <div className='col'>
                    <label>Password</label>
                    <input 
                        type='password' 
                        className='form-control' 
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                    </div>
                <div className='col'>
                    <label>Confirm password</label>
                    <input 
                        type='password' 
                        className='form-control' 
                        onChange={(e) => setConf(e.target.value)}
                    />
                </div>
            </div><br/>
            <button type='submit' className='btn btn-secondary' /*data-toggle='modal' data-target='#signup'*/>Create account</button>
        </form>      

        {/* Modal */}
        {/* <div className='modal fade' id='signup' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    { 
                        firstname === '' || lastname === '' || email === '' || actype === 'Choose...' || pass === '' || conf === ''?
                            <>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleModalLabel'>Error</h5>
                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div className='modal-body'>
                                    Please fill all the relevant fields
                                </div>
                            </>
                        :
                        <>
                            {
                                pass !== conf&&
                                <>
                                    <div className='modal-header'>
                                        <h5 className='modal-title' id='exampleModalLabel'>Error</h5>
                                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                            <span aria-hidden='true'>&times;</span>
                                        </button>
                                    </div>
                                    <div className='modal-body'>
                                        Password should be equal to confirmation
                                    </div>
                                </>
                            }
                        </>
                    }
                </div>
            </div>
        </div>   */}
    </div>
    ) 
}
