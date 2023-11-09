import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './containers/AboutPage.js'
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: "about",
        element: <AboutPage />,
        loader: teamLoader,
      },
    ],
  },
]);
console.log(App);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
