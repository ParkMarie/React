import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <Header />

      <main className="max-w-[120rem] m-auto p-8">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
