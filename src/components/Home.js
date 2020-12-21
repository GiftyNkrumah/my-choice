import React from 'react'
import '../styles/index.css';
import Arrow from '../images/arrow_1.png'

function Home() {
    return (
        <div className="home">

            <h1>Welcome to myChoice!</h1>
            <p>Just because everyone deserves to be heard...and properly accounted for</p>
            <br/>
            <p>Start your journey here</p>
            <img src={Arrow} alt=''/>            
            <div>
                <button type="button" class="btn btn-light">Create a new poll</button>
            </div>
        </div>
    )
}

export default Home
