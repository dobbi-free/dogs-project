import style from "../Breeds.module.css";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { GlobalContext } from "../../../context/context";
import { breedsAPI } from "../../../api/api";
import BlockNav from "./BlockNav";
import { useMediaQuery } from "react-responsive";
import BurgerButton from "./BurgerButton";

const SearchBlock = () => {
  const { store, constants } = useContext(GlobalContext);

  const navigate = useNavigate();

  const getSearchData = async (limit, breedId) => {
    const data = await breedsAPI.getBreedsData(limit, breedId);
    navigate("/breeds/search");
    store.dispatch({ type: constants.SET_SEARCH_DATA, searchData: data });
    store.dispatch({ type: constants.SET_PAST });
  };

  const getBreedsByName = async (name) => {
    store.dispatch({ type: constants.SET_LOADING, isLoading: true });
    if (name) {
      let data = await breedsAPI.getBreedsByName(name);
      if (data.length !== 0) {
        store.dispatch({ type: constants.SET_NOT_FOUND, notFound: false });
        getSearchData(10, data[0].id);
      } else {
        store.dispatch({ type: constants.SET_NOT_FOUND, notFound: true });
      }
    }
    store.dispatch({ type: constants.SET_LOADING, isLoading: false });
  };

  const onChange = (e) => {
    store.dispatch({
      type: constants.SET_SEARCH_NAME,
      searchName: e.target.value,
    });
  };

  const onClick = () => {
    if (store.state.searchName) {
      store.dispatch({ type: constants.SET_SEARCH_DATA, searchData: [] });
      store.dispatch({
        type: constants.SET_SHOW_RESULT,
        showResult: store.state.searchName,
      });
      getBreedsByName(store.state.searchName);
    } else {
      store.dispatch({ type: constants.SET_NOT_FOUND, notFound: true });
    }
    navigate("/breeds/search");
  };

  const showBurgerButtonTablet = useMediaQuery({
    minWidth: 586,
    maxWidth: 768,
  });
  const showBurgerButtonMobile = useMediaQuery({ maxWidth: 585 });

  return (
    <div className={style.search_block}>
      <div className={style.adaptive_wrapp}>
        {showBurgerButtonTablet && <BurgerButton />}
        <div className={style.search_wrapp}>
          <input
            className={style.input_search}
            type="text"
            placeholder={"Search for breeds by name"}
            value={store.state.searchName}
            onChange={onChange}
          />
          <button onClick={onClick} className={style.search_icon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.361 18.2168L14.601 13.2662C15.8249 11.8113 16.4954 9.98069 16.4954 8.07499C16.4954 3.62251 12.8729 0 8.42045 0C3.96797 0 0.345459 3.62251 0.345459 8.07499C0.345459 12.5275 3.96797 16.15 8.42045 16.15C10.092 16.15 11.6849 15.6458 13.0467 14.6888L17.8429 19.677C18.0434 19.8852 18.313 20 18.602 20C18.8755 20 19.1349 19.8957 19.3319 19.7061C19.7504 19.3034 19.7637 18.6357 19.361 18.2168ZM8.42045 2.10652C11.7115 2.10652 14.3889 4.78391 14.3889 8.07499C14.3889 11.3661 11.7115 14.0435 8.42045 14.0435C5.12937 14.0435 2.45198 11.3661 2.45198 8.07499C2.45198 4.78391 5.12937 2.10652 8.42045 2.10652Z"
                fill="#FF868E"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={style.burger_nav_wrapp}>
        {showBurgerButtonMobile && <BurgerButton />}
        <BlockNav />
      </div>
    </div>
  );
};

export default SearchBlock;
