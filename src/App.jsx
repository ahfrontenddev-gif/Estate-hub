import { Provider } from "react-redux";
import AnimatedRoutes from "./components/animate/AnimatedRoutes";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
