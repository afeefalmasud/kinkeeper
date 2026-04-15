import { createBrowserRouter } from "react-router";
import { Root } from "../Layout/Root";
import { Home } from "../Pages/Home/Home";
import { Stats } from "../Pages/Stats/Stats";
import { Timeline } from "../Pages/Timeline/Timeline";
import { Card } from "../Components/Card/Card";

const cardPromise = fetch("/friends.json").then((res) =>res.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/", 
        Component: Home,
        children:[
            {
              path: "card",
              element: <Card cardPromise={cardPromise}></Card>
            }
        ]
      },
      {path: "timeline", Component: Timeline},
      {path:"stats", Component: Stats},
    ]
  }
])