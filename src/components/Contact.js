import React, { useState } from 'react'

function Contact() {

    // Declaration of variables
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    function Message (event) {
        if (name !== '' && email !== '' && message !== '') {
            //Database stuff
            alert('Your message has been sent')
        }
    }

    return (
        <div>
            <div className='contact'>
                <div className='row'>
                    <div className='col-md-6 .d-flex contact_details'>
                        <div className='left_text'>
                            <h4>Address</h4>
                            <p className='nomargin'>
                                1880 Randolph Street
                            </p>
                            <p className='nomargin'>
                                Cambridge, MA
                            </p>
                            <br/>
                            <h4>Contact numbers</h4>
                            <p className='nomargin'>
                                508-738-8618
                            </p>
                            <p className='nomargin'>
                                617-230-2006
                            </p>
                            <br/>
                            <h4>General support</h4>
                            <p className='nomargin'>
                                info@mychoice.com
                            </p>
                        </div>
                    </div> 
                    <div className='col-md-6 contact_form'>
                        <h2>Send us a message</h2>
                        <form onSubmit={Message}>
                            <div className='form-group'>
                                <label>Name</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div><br/>
                            <div className='form-group'>
                                <label>Email</label>
                                <input 
                                    type='email' 
                                    className='form-control' 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div><br/>
                            <div className='form-group'>
                                <label>Phone number</label>
                                <input 
                                    type='text' 
                                    className='form-control'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div><br/>
                            <div className='form-group'>
                                <label>Message</label>
                                <textarea 
                                    type='text' 
                                    className='form-control' 
                                    rows='5' 
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div><br/>
                            <button type='submit' className='btn btn-secondary'>Send message</button>
                        </form><br/>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Contact
