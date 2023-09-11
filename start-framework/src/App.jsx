
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import ErrorPage from './Components/Error/ErrorPage';
import Layout from './Components/Layout/Layout';


let routers = createBrowserRouter([
  {path:"", element:<Layout/> , children:[
    {path: 'about' , element: <About/>},
    {path: 'home' , element: <Home/>},
    {path: '' , element: <Home/>},
    {path: 'contact' , element: <Contact/>},
    {path: 'portfolio' , element: <Portfolio/>},
    {path: '*' , element: <ErrorPage/>},
  ]},
  {path: '*' , element: <ErrorPage/>}

])
function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
