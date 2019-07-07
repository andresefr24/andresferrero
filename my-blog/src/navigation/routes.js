import Home from './screens/Home';
import About from "./screens/About";
import Portfolio from "./screens/Portfolio";
import Experiments from "./screens/Experiments/Experiments";
import Articles from "./screens/Articles";
import ExperimentsRouter from "./screens/Experiments/ExperimentsRouter";

const routes = {
    "home": Home,
    "about": About,
    "articles": Articles,
    "portfolio": Portfolio,
    "experiments": ExperimentsRouter,
};

export default routes;