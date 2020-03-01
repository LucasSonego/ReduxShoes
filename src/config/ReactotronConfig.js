import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure({ host: process.env.REACT_APP_HOST })
    .use(reactotronRedux())
    .connect();

  tron.clear();
  console.tron = tron;
}
