import "./global.scss";
import "./index.scss";
import { Layout } from "./layout/Layout";
import { HomePage } from "./routes/homePage/HomePage";
import { ListPage } from "./routes/listPage/ListPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./routes/LoginPage/LoginPage";
import { SignUp } from "./routes/signUpPage/SignUp";
import { SinglePage } from "./routes/SinglePage/SinglePage";

import { SpecialistInfo } from "./routes/SpecialistInfo/SpecialistInfo";
import { ContactPage } from "./routes/contactPage/ContactPage";
import { CompanyPage } from "./routes/companyPage/CompanyPage";
import { ProffesionalistForm } from "./routes/ProffesionalistForm/ProffesionalistForm";
import { AccountSettings } from "./routes/AccountSettings/AccountSettings";
import { EditAccountView } from "./routes/EditAccountView/EditAccountView";
import { WriteReview } from "./routes/WriteReview/WriteReview";

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
          path: "/account",
          element: <AccountSettings />,
          children: [{ path: "/account/edit", element: <EditAccountView /> }],
        },
        { path: "/proffesionalist_form", element: <ProffesionalistForm /> },
        {
          path: "/specialistInfo/:specialistId",
          element: <SpecialistInfo />,
        },
        {
          path: "/reviews/:specialistId",
          element: <WriteReview />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
