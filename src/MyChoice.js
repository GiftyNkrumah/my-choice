import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomIcons from './components/BottomIcons'
import Create from './components/Create'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Tutorial from './components/Tutorial'
import Login from './components/Login'
import Signup from './components/Signup'
import Update from './components/Update'
import ChangePassword from './components/ChangePassword'

function MyChoice() {
    return (
        <div>        
            <Router>
                <Navbar/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/tutorial' component={Tutorial}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/update' component={Update}/>
                <Route path='/changepassword' component={ChangePassword}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
                <Route path='/create' component={Create}/>
                <Route path='/reviews' component={Reviews}/>
                <Route path='/contact' component={Contact}/>
            </Router>
            <BottomIcons/>
        </div>
    )
}

export default MyChoice
