import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WelcomeScreen from './Welcome/Welcome';
import GameScreen from './Game/Game';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />
  },
  {
    path: "/game",
    // element: <div>GAAAAAAAAAAAAAME!</div>
    element: <GameScreen />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
