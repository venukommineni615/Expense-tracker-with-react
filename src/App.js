import './App.css';
import Signup from './components/Signup';
import Login from './components/Login'
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddProfile from './components/AddProfile';
const router=createBrowserRouter([
  {path:'/',element:<Home></Home>},
  {path:'/login',element:<Login></Login>},
  {path:'/signup',element:<Signup></Signup>},
  {path:'/addprofile',element:<AddProfile></AddProfile>}
])
function App() {
  return (
  
  <RouterProvider router={router}></RouterProvider>
  
  );
}

export default App;
