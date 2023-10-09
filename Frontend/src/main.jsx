import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './components/HeroSection/Hero'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import TodoPage from './components/TodoPage/TodoPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path=""
        element={<Hero />}
      ></Route>
      <Route
        path="signup"
        element={<Signup />}
      ></Route>
      <Route
        path="signin"
        element={<Signin />}
      ></Route>
      <Route
        path="todos"
        element={<TodoPage />}
      ></Route>
    </Route>,
  ),
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
      <ToastContainer></ToastContainer>
    </Provider>
  </React.StrictMode>,
)
