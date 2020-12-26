import React from 'react'
import Arrow from '../images/arrow_1.png'

function Dashboard() {
    return (
        <div className='all'>
            <div style={{textAlign:'center'}}>
                <div className="row">
                    <div className="col-md-6 .d-flex dashboard">
                        <h1>Hey there!</h1>
                        <p style={{fontSize:30}}>You missed one step...</p><br/><br/>
                        <p style={{fontSize:30}}>Sign in to see your dashboard</p>
                    </div>
                    {/* <div className="col-md-6 center">
                        <img className='flip' src={Arrow} alt=''/>
                    </div> */}
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard
