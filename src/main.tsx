import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css"; //import Mantine V7 styles needed by MRT
import "@mantine/dates/styles.css"; //if using mantine date picker features
import "mantine-react-table/styles.css"; //import MRT styles
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicTable from "./Pages/BasicTable/BasicTable.tsx";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/basic-table' element={<BasicTable />} />
        </Routes>
      </Router>
    </MantineProvider>
  </StrictMode>
);
