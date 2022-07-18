import common from "../../common-style/Common.module.css";
import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/context";
import NotItemFound from "../common/NotItemFound";
import SearchBlock from "./Search/SearchBlock";

const Breeds = () => {
  const { store } = useContext(GlobalContext);

  return (
    <div className={common.wrapp}>
      <SearchBlock />
      <div className={common.main_block}>
        <Outlet />
        {store.state.notFound && <NotItemFound />}
      </div>
    </div>
  );
};

export default Breeds;
