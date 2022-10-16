import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ResetPass from './Components/ResetPass/ResetPass';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'reset', element: <ResetPass /> },
    { path: '*', element: <h1>404</h1> },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
