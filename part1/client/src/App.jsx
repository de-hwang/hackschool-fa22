import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <main>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<View Purchase />} />
                    <Route path="/create" element={<CreatePurchase />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;