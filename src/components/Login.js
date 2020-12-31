import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'

function Login() {

    // Declaration of variables
    const {setLogged, email, setEmail} = useContext(LoginContext)
    const [password, setPassword] = useState('')

    let history = useHistory()

    // Validation
    function Validation(event) {
        if (email === password) {
            event.preventDefault()
            setLogged(true)
            history.push('/')
        }
    }

    return (
        <div className='all login'>
            <h3>Sign in</h3>
            <br/>
            <form onSubmit={Validation}>
                <div className="row">
                    <div className="col">
                        <label>Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                </div><br/>
                <div className="row">
                    <div className="col">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </div>
                </div><br/>
                <button type="submit" className="btn btn-secondary" data-toggle="modal" data-target="#login">Sign in</button>
            </form> <br/>
            <p>Don't have an account? <a href='/signup'>Create one</a> now. It takes seconds.</p> 

            {/* Modal */}
            <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    {
                        email === '' || password === ''?
                        <>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Error</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            <div className="modal-body">
                                Please fill all relevant fields
                            </div>
                        </>
                        :
                        <>
                            {
                                email !== password&&
                                <>
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Error</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                    </div>
                                    <div className="modal-body">
                                        Wrong email or password
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

export default Login
