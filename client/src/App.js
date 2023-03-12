import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/home/Home.jsx'
import Item from './pages/item/Item.jsx'
import Checkout from './pages/checkout/Checkout.jsx'
import Confirmation from './pages/checkout/Confirmation.jsx'

import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>,
      children: [
        {
          path: "/", element: <Home />
        },
        {
          path: '/item/:itemId', element: <Item />
        }, {
          path: '/checkout/success', element: <Confirmation />
        },
        {
          path: '/item', element: <Item />
        },
        {
          path: '/checkout', element: <Checkout />
        }
      ]
    }, {
      path: '/login', element: <Login />
    }, {
      path: '/register', element: <Register />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
