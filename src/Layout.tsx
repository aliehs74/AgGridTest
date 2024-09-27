import React, { useEffect } from "react";
import { useAppSelector } from "./store/hooks";
// import GridInstance from "./components/showComp/GridInstance";
import GridExample1 from "./components/document/GridExample1";
const Layout: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex justify-center items-center w-full">
      {/* <GridInstance /> */}
      <GridExample1 />
    </div>
  );
};

export default Layout;
