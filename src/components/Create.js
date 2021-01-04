import React, { useContext } from 'react'
import { PollContext } from '../contexts/PollContext'

function Create() {

    // Declaration of variables
    const { title, setTitle, subtitle, setSubtitle, cat, setCat} = useContext(PollContext)

    return (
        <div className='all'>
            <h3>Create a new poll</h3>
            <br/>
            <form>
                <div className='row'>
                    <div className='col col-md-4'>
                        <input 
                            type='text' 
                            className='form-control' 
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Title'
                            required
                        />
                    </div>
                </div><br/>
                <div className='row'>
                    <div className='col col-md-6'>
                        <input 
                            type='text' 
                            className='form-control' 
                            onChange={(e) => setSubtitle(e.target.value)}
                            placeholder='Subtitle'
                        />
                    </div>
                </div>
                <hr/>
                <br/>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="colFormLabel"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Option 1</label>
                    <div class="col-sm-6">
                        <input type="email" class="form-control form-control-sm" id="colFormLabelSm"/>         
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Option 2</label>
                    <div class="col-sm-6">
                        <input type="email" class="form-control form-control-sm" id="colFormLabelSm"/>         
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Option 3</label>
                    <div class="col-sm-6">
                        <input type="email" class="form-control form-control-sm" id="colFormLabelSm"/>         
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Option 4</label>
                    <div class="col-sm-6">
                        <input type="email" class="form-control form-control-sm" id="colFormLabelSm"/>         
                    </div>
                </div>                
            <br/>
                
  <button type="button" class="btn btn-outline-secondary btn-sm">Add</button>
                
                <br/>
                <hr/>
                <button type='submit' className='btn btn-secondary'>Create</button>
            </form> <br/>
            
            
        </div>
    )
}

export default Create
