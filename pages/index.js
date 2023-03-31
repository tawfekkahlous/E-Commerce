import Header from "@/components/Header";
import Search from "@/components/Search";
import Navbar from "@/components/Navbar";
import { useState } from "react";
export default function Home() {
  const [menuToogle, setMenuToogle] = useState(false);
  const handleToogle = () => {
    setMenuToogle(!menuToogle);
  };

  return (
    <>
      <Header />
      <Search handleToogle={handleToogle} />
      <Navbar menu={menuToogle} handleToogle={handleToogle} />
      {/* <Menu menuToogle={menuToogle}/> */}
    </>
  );
}
