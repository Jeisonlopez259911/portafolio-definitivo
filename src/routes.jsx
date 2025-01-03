import { Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";

function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
    )
}

export default AppRoutes