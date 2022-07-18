import style from "./Layout.module.css";
import React from "react";
import LeftSection from "../LeftSection/LeftSection";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Layout = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className={style.main_wrapp}>
      <div className={style.left_wrapp}>
        {!isTablet && <LeftSection />}
        {isTablet && <BurgerMenu />}
        {isTablet && <Outlet />}
      </div>
      <div className={style.right_section}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
