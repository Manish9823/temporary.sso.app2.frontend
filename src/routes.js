import async from "./components/Async";

const Layout = async(() => import("./components/Layout"));

const Logs = async(() => import("./components/pages/Logs"));
const Pricing = async(() => import("./components/pages/Pricing"));
const Charts = async(() => import("./components/pages/Charts"));
const Permissions = async(() =>
  import("./components/pages/Permissions")
);
const Templatess = async(() => import("./components/pages/templates"));
const Campaign = async(() => import("./components/pages/Campaign"));
const AuthGuard = async(() => import("./components/Auth/AuthGuard"));

const routes = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Campaign />,
      },
      {
        path: "campaign",
        element: <Campaign />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "logs",
        element: <Logs />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      ,
      {
        path: "permissions",
        element: <Permissions />,
      },
      {
        path: "templates",
        element: <Templatess />,
      },
    ],
  },
];
export default routes;
