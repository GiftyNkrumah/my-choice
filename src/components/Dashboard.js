import React, { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'
import smiley from '../images/smiley.png'

function Dashboard() {

    const { isLogged } = useContext(LoginContext)

    return (
        <div className='all'>
            {
                isLogged?
                    <div>
                        Work in progress
                    </div>
                :
                    <div style={{textAlign:'center'}}>
                        <h1>Hey there!</h1>
                        <img src={smiley} style={{width:200}} alt='hello'/>
                        <p style={{fontSize:30}}>Your dashboard will be displayed here once you sign in.</p><br/><br/>
                        <a href='/login'>
                            <button type="button" className="btn btn-secondary">Sign in</button>
                        </a>
                    </div>
            }   
        </div>
    )
}

export default Dashboard
