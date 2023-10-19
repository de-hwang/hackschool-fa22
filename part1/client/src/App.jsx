import Navbar from "./Navbar";
import React from "react";
import CreatePurchase from "./CreatePurchase";
import ViewPurchase from "./ViewPurchase";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <main>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ViewPurchase />} />
                    <Route path="/create" element={<CreatePurchase />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;