import DashboardPage from "./views/Dashboard/Dashboard";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "Dashboard",
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "Person",
    component: DashboardPage,
    layout: "/admin"
  }
];
export default dashboardRoutes;
