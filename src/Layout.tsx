import React, { useEffect } from "react";
import { useAppSelector } from "./store/hooks";
import GridMain from "./components/agGrid/GridMain";
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
      <GridMain/>
    </div>
  );
};

export default Layout;
