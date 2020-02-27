import React from 'react'
import _ from 'lodash'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './components/MainLayout'
import NoMatch from './pages/noMatch'
import NoPermission from './pages/noPermission'
import Home from './pages/home'
import Cards from './pages/BaseUI/cards'
import Buttons from './pages/BaseUI/buttons'
import Icons from './pages/BaseUI/icons'
import Affixs from './pages/BaseUI/affixs'

import Organizations from './pages/organizations'


const Routers = ({
    currentUser,
}) => {


    const hasPermission = (permission, component) => {
        const canEnter = _.find(_.get(currentUser, 'permissions', {}), (p) => permission === `${_.get(p, 'resource', '')}-${_.get(p, 'action', '')}`)
        if (!canEnter) {
            return NoPermission
        }

        return component
    }

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
                                <Route path={'/admin/cards'} component={Cards}/>
                                <Route path={'/admin/buttons'} component={Buttons}/>
                                <Route path={'/admin/icons'} component={Icons}/>
                                <Route path={'/admin/affixs'} component={Affixs}/>

                                <Route
                                    path={'/admin/organizations'}
                                    render={() => {
                                        return (
                                            <Switch>
                                                <Route
                                                    path={'/admin/organizations/depts'}
                                                    component={hasPermission('', Organizations.Depts)}
                                                />
                                                <Route
                                                    path={'/admin/organizations/groups'}
                                                    component={Organizations.Groups}
                                                />
                                                <Route
                                                    path={'/admin/organizations/positions'}
                                                    component={Organizations.Positions}
                                                />
                                            </Switch>
                                        )
                                    }}
                                />

                                <Route component={NoMatch} />
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