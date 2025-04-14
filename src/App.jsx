// import React from 'react';
// import { createBrowserHistory } from 'history';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import { BrowserRouter } from 'react-router-dom';
// import { Route, Switch, Redirect } from 'react-router';
// import configureStore from './store/configureStore';
// import Home from './container/Home/Home';
// import './styles.scss';
// import './theme/style.scss';
// const history = createBrowserHistory();
// const initialState = window.__INITIAL_STATE__;
// const store = configureStore(history, initialState);

// export default class App extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//       return(
//         <div className="App">
//           <Provider store={store}>
//             <ConnectedRouter history={history}>
//               <BrowserRouter>
//                 <Switch>
//                   <Route exact path = {'/'} component={Home} />
//                 </Switch>
//               </BrowserRouter>
//             </ConnectedRouter>
//           </Provider>
//         </div>
//       )
//     }
// }

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import configureStore from './store/store';
import './styles.scss';
import './theme/style.scss';
import HomeWrapper from './container/Home/HomeWrapper';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeWrapper />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
