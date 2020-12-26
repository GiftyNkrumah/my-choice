import React from 'react'
import '../styles/index.css';
import Arrow from '../images/arrow_1.png'

function Home() {
    return (
        <div className="home">
            <br/><br/>
            <h1>Welcome to myChoice!</h1>
            <p style={{fontSize:30}}>... because everyone deserves to be heard...and properly accounted for</p>
            <br/>
            <div className='exp'>
            <p style={{fontSize:30}}>Start your journey here <img className='arrow' src={Arrow} alt=''/></p> 
            </div>
            <div style={{clear: 'both'}}>
                <button type="button" className="btn btn-light">Create a new poll</button>
            </div>
            <br/>
        </div>
        
    )
}

export default Home
