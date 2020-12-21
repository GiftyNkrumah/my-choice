import React from 'react'

function BottomIcons() {
    return (
        <div className='bottom_bar'>
            <nav className="nav flex-column p5">
                <a className="nav-link" href="/create">Create poll</a>
                <a className="nav-link" href="/reviews">Reviews</a>
                <a className="nav-link" href="/contact">Contact</a>           
            </nav>
            <footer>myChoice ® 2020</footer>    
        </div>
    )
}

export default BottomIcons
