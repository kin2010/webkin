
import './App.css';
// import Customer from './Customer/Customer';

// import Giaodien from './Customer/Giaodien';
import Login from './components/Login/index'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import AuthProvider from './Context/AuthProvider'
import AppProvider from './Context/AppProvider'
import GUI from './components/Customer/GUI'





function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
          <Route  exact component={GUI} path='/' />
        
            
         
            <Route component={Login} path='/login' /> 
            {/* <Route component={UpImageStore} path='/blog' /> */}
           
          </Switch>
        </AppProvider>
      </AuthProvider>



    </BrowserRouter>
  );
}

export default App;
//  <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> 