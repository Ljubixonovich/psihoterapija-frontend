import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Dictionary from './pages/Dictionary';
import Blog from './pages/Blog';
import Layout from './components/Layout';


const App = (props) => {

   const routes = (
      <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/help' component={Help} />
         <Route path='/about' component={About} />
         <Route path='/dictionary' component={Dictionary} />
         <Route path='/blog' component={Blog} />
         <Route path='/contact' component={Contact} />
         <Route component={NotFound} />
      </Switch>
   );

   return (
      <Layout>      
         {routes}
      </Layout>
   );
};

export default App;
