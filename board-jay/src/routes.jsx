import { Navigate, createBrowserRouter } from "react-router-dom";

import About from '@pages/About.jsx';
import Home from '@pages/Home.jsx';
import TodoAdd from '@pages/TodoAdd.jsx';
import TodoDetail from '@pages/TodoDetail.jsx';
import TodoEdit from '@pages/TodoEdit.jsx';
import TodoList from '@pages/TodoList.jsx';
import ErrorPage from '@pages/ErrorPage.jsx';
import Layout from '@components/Layout.jsx';

// import { lazy } from 'react';
// const Layout = lazy(() => import('@components/Layout.jsx'));
// const About = lazy(() => import('@pages/About.jsx'));
// const Home = lazy(() => import('@pages/Home.jsx'));
// const TodoAdd = lazy(() => import('@pages/TodoAdd.jsx'));
// const TodoDetail = lazy(() => import('@pages/TodoDetail.jsx'));
// const TodoEdit = lazy(() => import('@pages/TodoEdit.jsx'));
// const TodoList = lazy(() => import('@pages/TodoList.jsx'));
// const ErrorPage = lazy(() => import('@pages/ErrorPage.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Navigate to="/home" /> },
      { path: 'about', element: <About /> },
      { path: 'home', element: <Home /> },
      { path: 'list', element: <TodoList /> },
      { 
        path: 'list/:_id',
        element: <TodoDetail />,
        children: [
          { path: 'edit', element: <TodoEdit /> }
        ]
      },
      { path: 'add', element: <TodoAdd /> },
    ]
  }
]);

export default router;