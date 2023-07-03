import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import Project from "../pages/Project/Project";
import MainLayout from "../layouts/MainLayout";

export const MAIN_ROUTE = "/";
export const CONTACT_ROUTE = "/contacts";
export const PROFILE_ROUTE = "/profile";
export const PROJECTS_ROUTE = "/projects";
export const PROJECT_ROUTE = `${PROJECTS_ROUTE}/:id`;

export const mainRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: MAIN_ROUTE,
      Component: Main,
    },
    {
      path: PROFILE_ROUTE,
      Component: Profile,
    },
    {
      path: CONTACT_ROUTE,
      Component: Contact,
    },
    {
      path: PROJECTS_ROUTE,
      Component: Projects,
    },
    {
      path: PROJECT_ROUTE,
      Component: Project,
    },
  ],
};

export const topbarNavigationItems = [
  // { route: MAIN_ROUTE, title: "Veronika" },
  { route: PROFILE_ROUTE, title: "Profile" },
  { route: PROJECTS_ROUTE, title: "Projects" },
  { route: CONTACT_ROUTE, title: "Contact" },
];
