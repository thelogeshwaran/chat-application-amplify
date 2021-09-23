import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Switch,Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import PrivateRoute from './Components/PrivateRoute'
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={Homepage} />
      </Switch>
    </div>
  )
}



export default withAuthenticator(App)