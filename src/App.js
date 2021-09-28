import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Switch,Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import PrivateRoute from './Components/PrivateRoute'
import 'font-awesome/css/font-awesome.min.css';
import ChatPage from './Pages/ChatPage'
import { observer } from 'mobx-react-lite'
import NavBar from './Components/NavBar'


const App = () => {
  
  return (
    <div className="text-white flex">
      <NavBar/>
      <div className="flex-1">
      <Switch>
        <PrivateRoute exact path="/" component={Homepage} />
        <Route path="/conversation/:conversationId/:conversationName" component={ChatPage} />
      </Switch>
      </div>
    </div>
  )
}

export default withAuthenticator(observer(App))
