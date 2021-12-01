import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import OrderContext from './context';

function Main() {
  let [order, setOrder] = useState({});

  return(
    <React.StrictMode>
      <OrderContext.Provider value={{order, setOrder}}>
        <App/>
      </OrderContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
