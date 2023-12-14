import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { Provider } from "react-redux";
import cartStore from "./utils/cartStore";
import Cart from "./component/cart";


const Grocery=lazy(()=> import("./component/Grocery"))
const About=lazy(()=> import("./component/About"))

const AppLayout = ()=>{
  return(
    <Provider store={cartStore}>
    <div className="app">
        <Header/>
       <Outlet/>
    </div>
    </Provider>
  
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/about",
      element:<Suspense><About/></Suspense>
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },
    {
       path:"/grocery",
       element:<Suspense fallback={<h1>loading......</h1>}><Grocery/></Suspense>
    },
    {
    path:"/cart",
    element:<Cart/>,
    }
  ],
    errorElement:<Error/>,
  },
  
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

