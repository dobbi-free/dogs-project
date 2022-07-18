import SearchBlock from "../Breeds/Search/SearchBlock";
import common from "../../common-style/Common.module.css";
import style from "./Gallery.module.css";
import BackBlock from "../Breeds/BackBlock";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context";
import { breedsAPI } from "../../api/api";
import UploadPhoto from "./UploadPhoto";
import Preloader from "../Preloader/Preloader";

const Gallery = () => {
  const { store, constants } = useContext(GlobalContext);
  const [searchOption, setSearchOption] = useState({
    order: "RANDOM",
    breedId: "",
    type: "['jpg', 'png', 'gif']",
    limit: 5,
  });
  const [refresh, setRefresh] = useState(false);
  const [modalMode, setModalMode] = useState(false);
  const getBreedsGallery = async (searchOption) => {
    store.dispatch({ type: constants.SET_LOADING, isLoading: true });
    const data = await breedsAPI.getBreedsGallery(searchOption);
    store.dispatch({ type: constants.SET_BREEDS_DATA, breeds: data });
    store.dispatch({ type: constants.SET_PAST });
    store.dispatch({ type: constants.SET_LOADING, isLoading: false });
  };

  const addFavorites = async (imageId) => {
    const data = await breedsAPI.addFavorites(imageId);
    if (data.message === "SUCCESS") {
      alert("added to favorites");
    } else if (
      data.message ===
      "DUPLICATE_FAVOURITE - favourites are unique for account + image_id + sub_id"
    ) {
      alert("already  favorites");
    }
  };

  useEffect(() => {
    getBreedsGallery(searchOption);
  }, [searchOption, refresh]);
  return (
    <div className={common.wrapp}>
      <SearchBlock />
      <div className={common.main_block}>
        <div className={style.panel_wrapp}>
          <BackBlock title={"GALLERY"} />
          <button
            onClick={(e) => {
              setModalMode(true);
            }}
            className={style.button_upload}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
                fill="#FF868E"
              />
            </svg>
            <p className={style.title_upload}>UPLOAD</p>
          </button>
        </div>
        <div className={style.filter_block}>
          <div className={style.option_line}>
            <div className={style.option_wrapp}>
              <p className={style.option_name}>Order</p>
              <select
                value={searchOption.order}
                onChange={(e) => {
                  const newState = { ...searchOption };
                  newState.order = e.target.value;
                  setSearchOption(newState);
                }}
                className={style.select}
              >
                <option className={style.option} defaultValue={"RANDOM"}>
                  Random
                </option>
                <option className={style.option} value={"ASC"}>
                  Ascending
                </option>
                <option className={style.option} value={"DESC"}>
                  Descending
                </option>
              </select>
            </div>
            <div className={style.option_wrapp}>
              <p className={style.option_name}>Type</p>
              <select
                value={searchOption.type}
                onChange={(e) => {
                  const newState = { ...searchOption };
                  newState.type = [e.target.value];
                  setSearchOption(newState);
                }}
                className={style.select}
              >
                <option className={style.option} value="['jpg', 'png', 'gif']">
                  All
                </option>
                <option className={style.option} value="['jpg', 'png']">
                  Static
                </option>
                <option className={style.option} value="gif">
                  Animated
                </option>
              </select>
            </div>
          </div>
          <div className={style.option_line}>
            <div className={style.option_wrapp}>
              <p className={style.option_name}>Breed</p>
              <select
                value={searchOption.breedId}
                onChange={(e) => {
                  const newState = { ...searchOption };
                  newState.breedId = e.target.value;
                  setSearchOption(newState);
                }}
                className={style.select}
              >
                <option className={style.option} defaultValue={" "} value={""}>
                  All breeds
                </option>
                <option className={style.option} value={11}>
                  American Bully
                </option>
                <option className={style.option} value={51}>
                  Border Terrier
                </option>
                <option className={style.option} value={232}>
                  Terier
                </option>
                <option className={style.option} value={10}>
                  American Bulldog
                </option>
              </select>
            </div>
            <div className={style.option_wrapp}>
              <p className={style.option_name}>Limit</p>
              <div className={style.diff_wrapp}>
                <select
                  value={searchOption.limit}
                  onChange={(e) => {
                    const newState = { ...searchOption };
                    newState.limit = Number(e.target.value);
                    setSearchOption(newState);
                  }}
                  className={style.select_diff}
                >
                  <option className={style.option} defaultValue={5}>
                    5 per page
                  </option>
                  <option className={style.option} value={10}>
                    10 per page
                  </option>
                  <option className={style.option} value={15}>
                    15 per page
                  </option>
                  <option className={style.option} value={20}>
                    20 per page
                  </option>
                </select>
                <button
                  onClick={(e) => {
                    setRefresh(!refresh);
                  }}
                  className={style.refresh}
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z"
                      fill="#FF868E"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.content_block}>
          {store.state.isLoading ? (
            <Preloader />
          ) : (
            <div className={common.image_wrapp}>
              {store.state.breeds.map((item) => (
                <div
                  onClick={(e) => {
                    addFavorites(item.id);
                  }}
                  key={item.id}
                  className={style.image_block}
                >
                  <img className={style.img_breeds} src={item.url} alt="" />

                  <span className={style.hover_favorites}>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z"
                        fill="#FF868E"
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {modalMode && <UploadPhoto setModalMode={setModalMode} />}
    </div>
  );
};

export default Gallery;
