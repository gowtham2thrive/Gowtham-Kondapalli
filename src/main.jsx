/**
 * @file main.jsx
 * @description Application entry point.
 *
 * - Imports the global stylesheet (CSS reset, utilities, responsive rules)
 * - Mounts the <App /> component inside React.StrictMode for development checks
 * - Targets the #root element defined in index.html
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div onContextMenu={(e) => e.preventDefault()}>
      <App />
    </div>
  </React.StrictMode>,
)
