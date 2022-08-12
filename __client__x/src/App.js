import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import DogCreate from './components/DogCreate';
import Detail from './components/Detail.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch> 
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route path='/dogs' component={DogCreate} />
          <Route path='/home/:id' component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
