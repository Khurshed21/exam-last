import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Todo from "./pages/Todo/Todo";
import TodoId from "./pages/TodoId/TodoId";
import Home from "./pages/Home/Home";



const App = () => {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          path: "/Home",
          element: <Home/>,
        },
        {
          path: "/Todo",
          element: <Todo/>,
        },
        {
          path: "/TodoId/:id",
          element: <TodoId/>,
        },
      ],
    },
  ]);


  return (


    

      <div>
                  <RouterProvider router={router} />
                 
               
      </div>
       
    
  );
};

export default App;
