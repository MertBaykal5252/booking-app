import { HomeView } from "./views/home";
import { ListView } from "./views/list";

// Routes
export const routes = [
  {
    url: "/",
    view: HomeView,
  },
  {
    url: "/list",
    view: ListView,
  },
];
