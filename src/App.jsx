import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <>
      <div className="font-serif">
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
