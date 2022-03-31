import { BrowserRouter,Routes, Route,Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

const AppRoutes =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<LoginPage /> } />
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes; 