// src/layouts/Layout/Layout.tsx
import { Header } from "~/layouts/Header";
import { Footer } from "~/layouts/Footer";
import MainNav from "~/navigation/MainNav";

const Layout = () => {
  return (
    <>
      <Header />
      <MainNav />
      <Footer />
    </>
  );
};

export default Layout;
