import React from 'react'
import '../styles/navbar.css'

function BottomIcons() {
    return (
        <div className='bottom_bar'>
            <br/>
            <nav className="nav flex-column">
                <a href="/create">Create poll</a>
                <a href="/reviews">Reviews</a>
                <a href="/contact">Contact</a>           
            </nav>
            <br/>
            <footer><b>myChoice ® 2020</b></footer> 
            <br/>   
        </div>
    )
}

export default BottomIcons
