

import Home from './Pages/Home.jsx';
import { Suspense, lazy } from 'react';
import Spinner from './components/Spinner.jsx';

import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const LazyAbout=lazy(()=>import("./Pages/About.jsx"))
const LazyLogin=lazy(()=>import("./components/Login.jsx"))
const LazyRegister=lazy(()=>import("./components/Register.jsx"))
const LazyBirthevent=lazy(()=>import("./Pages/Birthevent.jsx"))
const LazyBook=lazy(()=>import("./Pages/Book.jsx"))
const LazyServices=lazy(()=>import("./Pages/Services.jsx"))
const LazyAdmin=lazy(()=>import("./Pages/Admin.jsx"))
const LazyAddTheme=lazy(()=>import("./Pages/AddTheme.jsx"))
const LazyAddons=lazy(()=>import("./Pages/Addons.jsx"))
const LazyDetails=lazy(()=>import("./Pages/Details.jsx"))
const LazyEventRecords=lazy(()=>import("./components/EventRecords.jsx"))
const LazyUserGroup=lazy(()=>import("./components/UserGroup.jsx"))
const LazyProfile=lazy(()=>import("./components/Profile.jsx"))
const LazyAdminProfile=lazy(()=>import("./components/AdminProfile.jsx"))




function App() {
  const router= createBrowserRouter([
    {
      path: '/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense> 
    },
    {
      path: '/about',
      element: <Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
    },
    {
      path: '/',
      element: <Suspense fallback={<Spinner/>}><LazyLogin/></Suspense>
    },
    {
      path: '/register',
      element: <Suspense fallback={<Spinner/>}><LazyRegister/></Suspense>
    },
   
    {
      path: '/event',
      element: <Suspense fallback={<Spinner/>}><LazyBirthevent/></Suspense>
    },
    {
      path: '/book',
      element: <Suspense fallback={<Spinner/>}><LazyBook/></Suspense>
    },
    {
      path: '/services',
      element: <Suspense fallback={<Spinner/>}><LazyServices/></Suspense>
    },
    {
      path: '/admin',
      element: <Suspense fallback={<Spinner/>}><LazyAdmin/></Suspense>
    },
    {
      path: '/addtheme',
      element: <Suspense fallback={<Spinner/>}><LazyAddTheme/></Suspense>
    },
    {
      path: '/addons',
      element: <Suspense fallback={<Spinner/>}><LazyAddons/></Suspense>
    },
    {
      path: '/details',
      element: <Suspense fallback={<Spinner/>}><LazyDetails/></Suspense>
    },
    {
      path: '/usergroup',
      element: <Suspense fallback={<Spinner/>}><LazyUserGroup/></Suspense>
    },
    {
      path: '/eventrecord',
      element: <Suspense fallback={<Spinner/>}><LazyEventRecords/></Suspense>
    },
    {
      path: '/profile',
      element: <Suspense fallback={<Spinner/>}><LazyProfile/></Suspense>
    },
    {
      path: '/adminprofile',
      element: <Suspense fallback={<Spinner/>}><LazyAdminProfile/></Suspense>
    },
   
   

  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  )
}
export default App