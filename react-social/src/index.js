import React, {StrictMode} from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
import App from "./app/App";
import {AuthProvider} from "./auth/AuthProvider";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </StrictMode>
);
