import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Update() {

    // Declare variables as saved in database
    // Figure out how to use database and copy answers from there
    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [inst, setInst] = useState('')
    const [actype, setActype] = useState('')
    const [web, setWeb] = useState('')

    let history = useHistory()

    function Edit (event) {

        if (firstname !== '' && lastname !== '' && email !== '' && actype !== 'Choose...') {
            event.preventDefault()    
            // database work
            alert('done!')
            history.push('/')        
        }

    }

    return (
        <div className='all'>
        <h3>Update profile</h3>
        <br/>
        <form>
            <div className='row'>
                <div className='col'>
                    <label>First name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)} 
                        required
                    />
                    </div>
                <div className='col'>
                    <label>Middle name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        value={middlename}
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
                    <label>Name of institution</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        value={inst}
                        onChange={(e) => setInst(e.target.value)}
                    />
                </div>
                <div className='col col-md-3'>
                    <label>Type of account</label>
                    <select 
                        id='inputState' 
                        className='form-control' 
                        value={actype}
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
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                <div className='col'>
                    <label>Website</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        value={web}
                        onChange={(e) => setWeb(e.target.value)}
                    />
                </div>
            </div><br/>
            <button type='submit' className='btn btn-secondary' data-toggle='modal' data-target='#update'>Update</button>
        </form>      

        {/* Modal */}
        <div className='modal fade' id='update' tabIndex='-1' role='dialog' aria-labelledby='updateLabel' aria-hidden='true'>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    { 
                        firstname === '' || lastname === '' || email === '' || actype === 'Choose...'?
                            <>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='updateLabel'>Error</h5>
                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div className='modal-body'>
                                    Please ensure that all relevant fields are not empty
                                </div>
                            </>
                        :
                        <>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='updateLabel'>Confirmation</h5>
                                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>
                            <div className='modal-body'>
                                Are you sure you want to update your details?
                            </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={Edit}>Yes</button>
                                <button type='button' className='btn btn-secondary' data-dismiss='modal'>No</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>  
    </div>
    )
}
