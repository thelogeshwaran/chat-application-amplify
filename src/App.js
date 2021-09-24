import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Switch,Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import PrivateRoute from './Components/PrivateRoute'
import 'font-awesome/css/font-awesome.min.css';
import ChatPage from './Pages/ChatPage'


const App = () => {
  
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={Homepage} />
        <Route path="/conversation/:conversationId/:conversationName" component={ChatPage} />
      </Switch>
    </div>
  )
}



export default withAuthenticator(App)