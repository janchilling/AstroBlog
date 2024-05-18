import Footer from "./components/footerComponent/footerComponent";
import Header from "./components/headerComponent/headerComponent";
import Home from "./pages/homePage/homePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css"
import NeoWsPage from "./pages/neoWspage/neoWsPage";
import MarsRoverPage from "./pages/marsRoverPage/marsRoverPage";
import LoginComponent from "./auth/components/loginComponent/loginComponent";
import RegisterComponent from "./auth/components/registerComponent/registerComponent";
import {AuthProvider} from "./auth/config/authContext";
import RoverImagesPage from "./pages/roverImagesPage/roverImagesPage";

function App() {
    return (
        <Router>
            <AuthProvider>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<RegisterComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/near-earth-objects" element={<NeoWsPage/>}/>
                    <Route path="/mars-rover-images" element={<MarsRoverPage/>}/>
                    <Route path="/rover-images/:roverName" element={<RoverImagesPage />} />
                </Routes>
                <Footer/>
            </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
