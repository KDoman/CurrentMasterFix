import "./global.scss";
import "./index.scss";
import { Layout } from "./layout/Layout";
import { HomePage } from "./routes/homePage/HomePage";
import { ListPage } from "./routes/listPage/ListPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./routes/LoginPage/LoginPage";
import { SinglePage } from "./routes/SinglePage/SinglePage";

import { Messages } from "./routes/Messages/Messages";
import { AddOrder } from "./routes/AddOrder/AddOrder";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/list",
          element: <ListPage />,
          children: [
            {
              path: "/list/:id",
              element: <SinglePage />,
            },
          ],
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/messages",
          element: <Messages />,
          children: [
            {
              path: "/messages/addOrder",
              element: <AddOrder />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
