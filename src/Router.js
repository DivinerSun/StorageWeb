import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './components/MainLayout'
import NoMatch from './pages/noMatch'
import Home from './pages/home'
import Buttons from './pages/BaseUI/buttons'



const Routers = () => {

    return (
        <Router>
            <App>
                <Switch>
                    <Redirect exact from={'/'} to={'/login'}/>
                    <Route path={'/login'} component={Login} />
                    <Route path={'/admin'} render={() => 
                        <Admin>
                            <Switch>
                                <Redirect exact from={'/admin'} to={'/admin/home'}/>
                                <Route path={'/admin/home'} component={Home}/>
                                <Route path={'/admin/buttons'} component={Buttons}/>
                            </Switch>
                        </Admin>
                    } />
                    <Route component={NoMatch} />
                </Switch>
            </App>
        </Router>
    )
}


export default Routers;