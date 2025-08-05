import ShortenedUrlPage from "./ShortenedUrlPage";
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './components/dashboard/DashboardLayout'
import { Route, Routes } from "react-router-dom";


const AppRouter = () => {
    return (
    <>
        <NavBar/>
        <Toaster position='bottom-center'/>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardLayout />} />
        </Routes>
        <Footer/>
    </>
    );
}

export default AppRouter;

export const SubdomainRouter =() => {
    return (
    <Routes>
        <Route path="/:url" element={<ShortenUrlPage />} />
    </Routes>
    );
}