import Blank from "./pages/Blank";
import "./app.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<Blank/>} />
                <Route path="/started" />
                <Route path="/calender" />
                <Route path="/user" />
                <Route path="/order" />
            </Route>
        </Routes>
    </BrowserRouter>
  )
  
}

export default App;
