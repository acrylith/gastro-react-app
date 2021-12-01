import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import ReactDOM from 'react-dom';

import App from './App';

import firebaseConfig from './base';

import OrderContext from './context';

function Main() {
  let [vares, setVares]= useState({});
  let [order, setOrder] = useState({});

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
    db.ref('/vares/').on('value', snapshot => {
      const data = snapshot.val();
      setVares(data);
    });// eslint-disable-next-line
  }, []);

  return(
    <React.StrictMode>
      <OrderContext.Provider value={{orders:{order, setOrder}, vare:{vares, setVares}}}>
        <App/>
      </OrderContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
