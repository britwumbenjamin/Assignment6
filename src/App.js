import SignupComponent from './pages/signup'
import LoginComponet from './pages/login'
import {Switch,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginComponet}/>
        <Route exact path='/signup' component={SignupComponent}/>
      </Switch>
    </div>
  );
}

export default App;

// npm add react-router-dom
