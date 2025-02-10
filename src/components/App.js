import Header from "./Header";
import "../../index.css";
import { Outlet } from "react-router-dom";

const App = () => {


  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
