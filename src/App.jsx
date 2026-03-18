import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <>
      <div className="font-serif">
        <Header />
        <div className="mx-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
