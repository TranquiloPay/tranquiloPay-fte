import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import AppHeader from "./components/AppHeader";
import { globalStyles } from "./styles/global";
import Providers from "./providers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
globalStyles();

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <AppHeader />
        <Router />
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
