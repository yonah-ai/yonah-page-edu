import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/tailwind.css";

import Landing from "./pages/index";
import Login from "./pages/login";
import AuthorityDashboard from "./pages/authority_dashboard";
import SecondAudienceDashboard from "./pages/second_audience_dashboard";
import YonahChat from "./pages/yonah_chat";
import Pipeline from "./pages/pipeline";
import Result from "./pages/result";
import Account from "./pages/account";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/authority" element={<AuthorityDashboard />} />
        <Route path="/audience" element={<SecondAudienceDashboard />} />
        <Route path="/chat" element={<YonahChat />} />
        <Route path="/pipeline/:decisionId" element={<Pipeline />} />
        <Route path="/result/:decisionId" element={<Result />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
