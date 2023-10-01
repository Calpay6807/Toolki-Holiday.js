import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Aside from "./components/aside";
import Sepet from "./pages/sepet";
import UserCommit from "./pages/user-commit";

function App() {
  // if (data === null) return <>Yükleniyorr</>;
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Aside />} />
        <Route path="/sepet" element={<Sepet />} />
        <Route path="/UserCommit" element={<UserCommit />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
