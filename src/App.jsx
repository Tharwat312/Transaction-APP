import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'

function App() {
  let Router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "*", element: <NotFound /> }
      ]
    },
  ])
  return <RouterProvider router={Router}></RouterProvider>
}

export default App
