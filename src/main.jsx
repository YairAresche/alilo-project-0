import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirestore } from './firebase/firebase'
import './index.css'


initFirestore()

ReactDOM.createRoot(document.getElementById('root')).render( <App /> )
