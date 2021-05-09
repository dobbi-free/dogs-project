import style from "./Breeds.module.css";
import common from "../../common-style/Common.module.css";
import BackBlock from "./BackBlock";
import FilterImage from "./FilterImage";
import { NavLink } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context";
import Preloader from "../Preloader/Preloader";

const FindBreeds = ({
  breedId,
  setBreedId,
  getBreedsData,
  notFound,
  isLoading,
}) => {
  const { store, constants } = useContext(GlobalContext);
  const [limit, setLimit] = useState({
    count: 10,
  });

  useEffect(() => {
    getBreedsData(limit.count, breedId.id);
  }, [limit, breedId]);

  const setSortArray = (newArray) => {
    store.dispatch({ type: constants.SET_BREEDS_DATA, breeds: newArray });
  };

  return (
    <div>
      <div className={style.panel_wrapp}>
        <BackBlock title={"BREEDS"} />
        <FilterImage
          limit={limit}
          setLimit={setLimit}
          state={store.state.breeds}
          setSortArray={setSortArray}
          breedId={breedId}
          setBreedId={setBreedId}
        />
      </div>
      {!notFound && (
        <div className={style.content_block}>
          {isLoading ? (
            <Preloader />
          ) : (
            <div className={common.image_wrapp}>
              {store.state.breeds.map((item) => (
                <NavLink
                  to={"/breeds/" + item.breeds[0]?.id}
                  key={item.id}
                  className={style.image_block}
                >
                  <img className={style.img_breeds} src={item.url} alt="" />

                  <span className={style.hover_name}>
                    {item.breeds[0]?.name}
                  </span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FindBreeds;
