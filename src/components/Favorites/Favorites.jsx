import SearchBlock from "../Breeds/Search/SearchBlock";
import common from "../../common-style/Common.module.css";
import style from "../Gallery/Gallery.module.css";
import BackBlock from "../Breeds/BackBlock";
import { GlobalContext } from "../../context/context";
import React, { useContext, useEffect, useState } from "react";
import { breedsAPI } from "../../api/api";
import Preloader from "../Preloader/Preloader";
import NotItemFound from "../common/NotItemFound";

const Favorites = () => {
  const { store, constants } = useContext(GlobalContext);

  const getFavorites = async () => {
    store.dispatch({ type: constants.SET_LOADING, isLoading: true });
    const data = await breedsAPI.getFavorites();
    if (data.length <= 0) {
      store.dispatch({ type: constants.SET_NOT_FOUND, notFound: true });
    } else {
      store.dispatch({ type: constants.SET_FAVORITES_DATA, favorites: data });
      store.dispatch({ type: constants.SET_NOT_FOUND, notFound: false });
    }
    store.dispatch({ type: constants.SET_LOADING, isLoading: false });
  };

  const [result, setResult] = useState([]);

  const deleteFavorite = async (id, image_id) => {
    const data = await breedsAPI.deleteFavorite(id);

    if (data.message === "SUCCESS") {
      const h = new Date();
      const newObject = {
        date: h.toLocaleTimeString().slice(0, -3),
        image_id: image_id,
      };
      result.unshift(newObject);
      setResult([...result]);
    }
  };

  useEffect(() => {
    getFavorites();
  }, [result]);

  return (
    <div className={common.wrapp}>
      <SearchBlock />
      <div className={common.main_block}>
        <div className={style.panel_wrapp}>
          <BackBlock title={"FAVORITES"} />
        </div>
        <div className={common.content_block}>
          {store.state.isLoading ? (
            <Preloader />
          ) : (
            <div className={common.image_wrapp}>
              {store.state.favorites.map((item) => (
                <div
                  onClick={(e) => {
                    deleteFavorite(item.id, item.image_id);
                  }}
                  key={item.id}
                  className={style.image_block}
                >
                  <img
                    className={style.img_breeds}
                    src={item.image.url}
                    alt=""
                  />

                  <span className={style.hover_favorites}>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z"
                        fill="#FF868E"
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          )}
          {!store.state.notFound ? (
            <div className={style.result_wrapp}>
              {result.map((item) => (
                <div key={item.id + item.image_id} className={style.result_item}>
                  <div className={style.result_date}>{item.date}</div>
                  <p className={style.result_info}>
                    Image ID: <span>{item.image_id}</span> was removed from
                    Favourites
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <NotItemFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
