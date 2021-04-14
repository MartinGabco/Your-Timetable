import './App.css';

import { Switch, Route } from 'react-router-dom';

import Timetable from './components/Timetable.jsx';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
        <header>
            <Navigation />
        </header>
        <main>    
            <Switch>
                <Route path="/" component={Timetable} exact />
                <Route path="/registerform" component={RegisterForm} />       
                <Route path="/loginform" component={LoginForm} />
            </Switch>
        </main>
    </div>
  );
}

export default App;
