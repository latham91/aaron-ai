import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePost />} />
            </Routes>
            <Footer />
        </>
    );
}
