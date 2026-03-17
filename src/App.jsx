import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
