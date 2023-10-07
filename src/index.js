import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Posts from "./views/Posts/Posts";
import ReadPosts from "./views/ReadPosts/ReadPosts";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
   
    {
      path: '/' ,
      element: <Posts />
    }, 

  {
    path: '/read/:id',
    element: <ReadPosts/>
  },
  {
    path:" *" ,
    element : <h1>Page Not Found</h1>
  }
  ]
)
root.render(
    <RouterProvider router={router} />
);


