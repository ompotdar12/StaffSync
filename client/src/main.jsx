import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// BrowserRouter enables your React application to use URL-based routing. It serves as a wrapper for your entire application, allowing you to build Single Page Applications (SPAs) where users can navigate between different views or "pages" without the browser reloading the entire page, while Routes and Route define which component should be rendered for each path.
import {AuthProvider} from "./context/AuthContext.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
       <App />
    </AuthProvider>
  </BrowserRouter>,
)
