import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [token, setToken] = useState();
  useEffect(() => {
    const getToken = localStorage.getItem("login-token");
    setToken(getToken);

  }, []);
  console.log({ token });

  return (
    <>
      <Navbar />
      {token ? (<main>{children}</main>) : ("")}
      
      <Footer />
    </>
  );
}
