import Layout from './components/layouts/Layout/Layout' 
import { Route, Switch } from 'react-router-dom';
import CatsContainer from './containers/CatsContainer/CatsContainer';
import ColoniesContainer from './containers/ColoniesContainer/ColoniesContainer';
import Home from './screens/Home/Home'

function App() {
  return ( 
    <Layout> 
    <Switch>
        <Route path='/cats' component={CatsContainer} />
        <Route path='/colonies' component={ColoniesContainer} />
        <Route path='/' component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
