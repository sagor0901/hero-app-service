import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import ShowAllApps from '../Pages/ShowAllApps/ShowAllApps';
import Installation from '../Pages/Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('/appData.json'),
            path:'/',
            Component:Home,
        },
        {
            path:'/showAllApps',
            loader:()=>fetch('/appData.json'),
            Component:ShowAllApps,
        },
        
        {
            path:'/installation',
            Component:Installation,
        },
    ]
  },
]);

