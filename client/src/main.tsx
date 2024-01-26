import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Providers from "./providers.tsx";
import { customFetch } from "./utils/custom-fetch.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

fetch("/api/v1/test")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("DATA", data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

const data = await customFetch.get("/test");
console.log("DATA_AXIOS", data);
