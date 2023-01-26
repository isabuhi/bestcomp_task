import {createBrowserRouter} from "react-router-dom";


import Home from "../pages/home"
import EditProfile from "../pages/editProfile"
import CreateProfile from "../pages/createProfile"

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "edit/:id",
    element: <EditProfile />,
  },
  {
    path: "create",
    element: <CreateProfile />,
  },
]);