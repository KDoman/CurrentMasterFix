import "./global.scss";
import "./index.scss";
import { Layout } from "./layout/Layout";
import { HomePage } from "./routes/homePage/HomePage";
import { ListPage } from "./routes/listPage/ListPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./routes/LoginPage/LoginPage";
import { SignUp } from "./routes/signUpPage/SignUp";
import { SinglePage } from "./routes/SinglePage/SinglePage";

import { Messages } from "./routes/Messages/Messages";
import { MoreProffesionalistInfo } from "./routes/moreProffesionalInfoPage/MoreProffesionalistInfo";
import { ContactPage } from "./routes/contactPage/ContactPage";
import { CompanyPage } from "./routes/companyPage/CompanyPage";

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
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/aboutUs",
          element: <CompanyPage />,
        },
        {
          path: "/messages",
          element: <Messages />,
          children: [
            {
              path: "/messages/more_proffesionalist_info",
              element: <MoreProffesionalistInfo />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
