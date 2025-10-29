import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import TestPage from "./pages/TestPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
        </Routes>
    );
}

export default App;
