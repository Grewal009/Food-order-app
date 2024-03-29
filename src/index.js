import React from 'react'
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/ReataurantMenu';
import Cart from './components/Cart';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './utils/store';

const AppLayout = () => {
  return (
      <div>
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
      </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error />,   
        children : [{
            path : "/",
            element : <Body />,    
        },
        {
            path : "/about",
            element : <About />,    
        },
        {
            path : "/contact",
            element : <Contact />,    
        },
        {
            path : "/cart",
            element : <Cart />,
        },
        {
            path : "/restaurant/:id",
            element : <RestaurantMenu />,
        }
    ]}
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);