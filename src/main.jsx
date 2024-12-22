import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Home from './Pages/HomePage/Home.jsx';
import Login from './Pages/AuthPage/Login.jsx';
import Registration from './Pages/AuthPage/Registration.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="colored"
      />
    </AuthProvider>
  </StrictMode>
);
