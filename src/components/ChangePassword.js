import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function ChangePassword() {

    // Declaration of variables
    const [oldp, setOldp] = useState('')
    const [newp, setNewp] = useState('') 
    const [conf, setConf] = useState('')

    let history = useHistory()

    function Change (event) {
        if (newp === conf) {
            event.preventDefault()
            // database stuff
            alert('done')
            history.push('/')
        }
        
    }

    return (
        <div className='all login'>
            <h3>Change password</h3>
            <br/>
            <form>
                <div className='row'>
                    <div className='col'>
                        <label>Old password</label>
                        <input 
                            type='password' 
                            className='form-control' 
                            onChange={(e) => setOldp(e.target.value)}
                            required
                        />
                    </div>
                </div><br/>
                <div className='row'>
                    <div className='col'>
                        <label>New password</label>
                        <input 
                            type='password' 
                            className='form-control' 
                            onChange={(e) => setNewp(e.target.value)}
                            required
                        />
                    </div>
                </div><br/>
                <div className='row'>
                    <div className='col'>
                        <label>Confirm new password</label>
                        <input 
                            type='password' 
                            className='form-control' 
                            onChange={(e) => setConf(e.target.value)}
                        />
                    </div>
                </div><br/>
                <button type='submit' className='btn btn-secondary' data-toggle='modal' data-target='#change'>Change Password</button>
            </form>

            {/* Modal */}
            <div className='modal fade' id='change' tabIndex='-1' role='dialog' aria-labelledby='changeLabel' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        { 
                            oldp === '' || newp === '' || newp === ''?
                                <>
                                    <div className='modal-header'>
                                        <h5 className='modal-title' id='changeLabel'>Error</h5>
                                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                        <span aria-hidden='true'>&times;</span>
                                        </button>
                                    </div>
                                    <div className='modal-body'>
                                        Please ensure that all fields are filled
                                    </div>
                                </>
                            :
                            <>
                                {
                                    newp === conf?
                                    <>
                                        <div className='modal-header'>
                                            <h5 className='modal-title' id='changeLabel'>Confirmation</h5>
                                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                                <span aria-hidden='true'>&times;</span>
                                            </button>
                                        </div>
                                        <div className='modal-body'>
                                            Are you sure you want to change your password?
                                        </div>
                                        <div className='modal-footer'>
                                            <button type='button' className='btn btn-secondary' onClick={Change}>Yes</button>
                                            <button type='button' className='btn btn-secondary' data-dismiss='modal'>No</button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='modal-header'>
                                            <h5 className='modal-title' id='changeLabel'>Error</h5>
                                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                                <span aria-hidden='true'>&times;</span>
                                            </button>
                                        </div>
                                        <div className='modal-body'>
                                            Confirmation should be the same as new password
                                        </div>
                                    </>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
                
        </div>
    )
}
