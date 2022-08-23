import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store'

function Main() {
  return(
    <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
    </React.StrictMode>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Main/>)