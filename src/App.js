import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/headerComponent/headerComponent";
import Footer from "./components/footerComponent/footerComponent";
import Home from "./pages/homePage/homePage";
import NeoWsPage from "./pages/neoWspage/neoWsPage";
import MarsRoverPage from "./pages/marsRoverPage/marsRoverPage";
import LoginComponent from "./auth/components/loginComponent/loginComponent";
import RegisterComponent from "./auth/components/registerComponent/registerComponent";
import { AuthProvider } from "./auth/config/authContext";
import RoverImagesPage from "./pages/roverImagesPage/roverImagesPage";

function App() {
    useEffect(() => {
        const token = localStorage.getItem("token");
    }, []);

    return (
        <Router>
            <AuthProvider>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<RegisterComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/near-earth-objects" element={<ProtectedRoute><NeoWsPage /></ProtectedRoute>} />
                        <Route path="/mars-rover-images" element={<ProtectedRoute><MarsRoverPage /></ProtectedRoute>} />
                        <Route path="/rover-images/:roverName" element={<ProtectedRoute><RoverImagesPage /></ProtectedRoute>} />
                    </Routes>
                    <Footer />
                </div>
            </AuthProvider>
        </Router>
    );
}

function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
}

export default App;
