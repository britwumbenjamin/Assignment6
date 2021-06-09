import SignupComponent from './pages/signup'
import LoginComponet from './pages/login'
import User from './pages/user'
import {Switch,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={User}/>
        <Route exact path='/signup' component={SignupComponent}/>
        <Route exact path='/login' component={LoginComponet}/>
      </Switch>
    </div>
  );
}

export default App;

// npm add react-router-dom
