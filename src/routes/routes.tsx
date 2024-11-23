import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/Layout/MainLayout";
import JobDetail from "@/pages/User/Job/JobDetail";
import Register from "@/components/Auth/Register/Register.tsx";
import Login from "@/components/Auth/Login/Login.tsx";
import App from "@/App";
import Otp from "@/components/Auth/OTP/Otp";
import JobApplicationHistory from "@/pages/User/Job/JobApplied";
import CompanyRegister from "@/pages/User/Company/Company-Register";
import Profile from "@/pages/User/Profile/Profile";
import SocialCallback from "@/components/Auth/SocialCallback/SocialCallback";
import AuthGuard from "@/guards/AuthGuard";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <AuthGuard />,
        children: [
          { path: "/", element: <App /> },
          { path: "posts/:id", element: <JobDetail /> },
          { path: "/profile", element: <Profile /> },
          { path: "/applicaiton-history", element: <JobApplicationHistory /> },
          { path: "/company-register", element: <CompanyRegister /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "verify", element: <Otp /> },
      {
        path: "social/callback/:loginType",
        element: <SocialCallback />,
      },
    ],
  },
]);

export default routers;
