import React, { useContext, useState } from 'react'
import LoginContext from '../contexts/LoginContext'

function Reviews() {

    // Declare variables
    // const { email } = useContext(LoginContext)
    const [review, setReview] = useState('')

    function Review (event) {
        if (review !== '') {
            //database stuff
            alert('review received')
        }
    }

    return (
        <div>
            <div className='contact'>
                <div className='row'>
                    <div className='col-md-6 .d-flex reviews'>
                        
                    </div> 
                    
                    <div className='col-md-6 contact_form fix'>
                        <h3>Reviews</h3>
                    <div>It was a concerning development that he couldn't get out of his mind. He'd had many friends throughout his early years and had fond memories of playing with them, but he couldn't understand how it had all stopped. There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last.
Her mom had warned her. She had been warned time and again, but she had refused to believe her. She had done everything right and she knew she would be rewarded for doing so with the promotion. So when the promotion was given to her main rival, it not only stung, it threw her belief system into disarray. It was her first big lesson in life, but not the last.
What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.
What were they eating? It didn't taste like anything she had ever eaten before and although she was famished, she didn't dare ask. She knew the answer would be one she didn't want to hear.
He walked down the steps from the train station in a bit of a hurry knowing the secrets in the briefcase must be secured as quickly as possible. Bounding down the steps, he heard something behind him and quickly turned in a panic. There was nobody there but a pair of old worn-out shoes were placed neatly on the steps he had just come down. Had he past them without seeing them? It didn't seem possible. He was about to turn and be on his way when a deep chill filled his body.</div>
                        <br/><hr/><br/>
                        
                        <form onSubmit={Review}>    
                            <div className='form-group'>
                                <textarea 
                                    type='text' 
                                    className='form-control' 
                                    rows='5' 
                                    onChange={(e) => setReview(e.target.value)}
                                    placeholder='Your review'
                                    required
                                />
                            </div><br/>
                            <button type='submit' className='btn btn-secondary btn-sm'>Send review</button>
                        </form><br/>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Reviews
