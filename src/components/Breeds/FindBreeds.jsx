import style from "./Breeds.module.css";
import common from "../../common-style/Common.module.css";
import BackBlock from "./BackBlock";
import FilterImage from "./FilterImage";
import { NavLink } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context";
import Preloader from "../Preloader/Preloader";
import { breedsAPI } from "../../api/api";

const FindBreeds = ({
  notFound
}) => {
  const { store, constants } = useContext(GlobalContext);
  const [limit, setLimit] = useState({
    count: 10,
  });

  const [breedId, setBreedId] = useState({
    id: "",
  });

  const getBreedsData = async (limit, breedId) => {
    store.dispatch({ type: constants.SET_LOADING, isLoading: true });
    const data = await breedsAPI.getBreedsData(limit, breedId);
    store.dispatch({ type: constants.SET_BREEDS_DATA, breeds: data });
    store.dispatch({ type: constants.SET_PAST });
    store.dispatch({ type: constants.SET_LOADING, isLoading: false });
  };

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
      {!store.state.notFound && (
        <div className={style.content_block}>
          {store.state.isLoading ? (
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
