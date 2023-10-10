import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import SongsContextProvider from './contexts/Songs/SongsContext'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <SongsContextProvider>
      <App />
    </SongsContextProvider>
  </BrowserRouter>,
)
