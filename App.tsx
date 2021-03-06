import React from 'react';
import Main from './src/screens/Main';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {AppearanceProvider} from 'react-native-appearance';


const App = () => {
   return(
   <Provider store={store}>
      <Main></Main>
   </Provider>
   )   
};

 export default App;