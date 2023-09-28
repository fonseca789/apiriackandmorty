import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux' 
import store from './components/redux/store'
import { 
  BrowserRouter
  
} from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: "home",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);