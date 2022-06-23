import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import adminRoutes from "./routes/admin";
import PageNotFound from "./components/PageNotFound";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

axios.defaults.baseURL = "http://localhost:5000/api/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Layout>
      <BrowserRouter>
        <Routes>
          {adminRoutes.map((route, idx) => {
            if (!route.paths)
              return (
                <Route
                  element={<route.element />}
                  path={route.path}
                  key={"route_" + idx}
                />
              );

            return (
              <Route path={route.path} key={"route_" + idx}>
                <Route index element={<route.element />} />
                {route.paths.map((nestedRoute, nestedIdx) => {
                  return (
                    <Route
                      element={<nestedRoute.element />}
                      path={nestedRoute.path}
                      key={"route_" + idx + "_" + nestedIdx}
                    />
                  );
                })}
              </Route>
            );
          })}
          <Route element={<PageNotFound />} path="*"></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  </LocalizationProvider>
);
