import React from "react";
import { Outlet, useParams } from "react-router-dom";
import common from "../../common-style/Common.module.css";
import SearchBlock from "../Breeds/Search/SearchBlock";
import style from "../Breeds/Breeds.module.css";
import BackBlock from "../Breeds/BackBlock";

const Rating = () => {
  const { rating } = useParams();

  return (
    <>
      <div className={common.wrapp}>
        <SearchBlock />
        <div className={common.main_block}>
          <div className={style.panel_wrapp}>
            <BackBlock title={+rating === 1 ? "LIKES" : "DISLIKES"} />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Rating;
