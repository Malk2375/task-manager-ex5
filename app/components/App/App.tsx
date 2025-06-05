// src/components/App/App.tsx
import React from "react";
import { Header, Footer } from "@/layouts";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import routes from "@/routes"; // Importation des routes

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <div>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
