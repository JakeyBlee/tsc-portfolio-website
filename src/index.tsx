import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app/App';
import { Profile } from './app/views/Profile';
import { Qualifications } from './app/views/Qualifications';
import { Employment } from './app/views/Employment';
import { Projects } from './app/views/Projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Profile/>
      },
      {
        path: '/employment',
        element: <Employment/>
      },
      {
        path: '/qualifications',
        element: <Qualifications/>
      },
      {
        path: '/projects',
        element: <Projects/>
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);