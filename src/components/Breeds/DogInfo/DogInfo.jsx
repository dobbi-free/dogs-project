import BackBlock from "../BackBlock";
import React, { useContext, useEffect } from "react";
import common from "../Breeds.module.css";
import style from "./DogInfo.module.css";
import { breedsAPI } from "../../../api/api";
import { GlobalContext } from "../../../context/context";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreloaderImage from "../../Preloader/PreloaderImage";

const DogInfo = () => {
  const { store, constants } = useContext(GlobalContext);
  const { breedId } = useParams();

  const getBreed = async () => {
    store.dispatch({ type: constants.SET_LOADING, isLoading: true });
    const limit = 10;
    const data = await breedsAPI.getBreedsData(limit, breedId);
    if (data.length) {
      store.dispatch({ type: constants.SET_BREED_INFO, breedInfo: data });
    } else {
      store.dispatch({ type: constants.SET_NOT_FOUND, notFound: true });
    }
    store.dispatch({ type: constants.SET_LOADING, isLoading: false });
  };

  useEffect(() => {
    getBreed();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <div className={common.panel_wrap}>
        <BackBlock title={"BREEDS"} />
        <div className={common.breed_id}>
          {store.state.breedInfo[0]?.breeds[0].id}
        </div>
      </div>
      {!store.state.notFound && (
        <>
          <div className={style.main_block}>
            {store.state.isLoading ? (
              <PreloaderImage />
            ) : (
              <Slider {...settings}>
                {store.state.breedInfo.map((item) => (
                  <div className={style.img_block}>
                    <img className={style.img} src={item?.url} alt="" />
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div className={style.info_block}>
            <div className={style.name_block}>
              <div className={style.name}>
                {store.state.breedInfo[0]?.breeds[0].name}
              </div>
            </div>
            <h4 className={style.bred_for}>
              {store.state.breedInfo[0]?.breeds[0].bred_for}
            </h4>
            <div className={style.main_info}>
              <div className={style.block_wrapp}>
                <h5 className={style.title_value}>Temperament: </h5>
                <p className={style.value}>
                  {store.state.breedInfo[0]?.breeds[0].temperament}
                </p>
              </div>
              <div className={style.block_wrapp}>
                <div className={style.info_wrapp}>
                  <h5 className={style.title_value}>Height: </h5>
                  <p className={style.value}>
                    {store.state.breedInfo[0]?.breeds[0].height.metric} cm at
                    the withers
                  </p>
                </div>
                <div className={style.info_wrapp}>
                  <h5 className={style.title_value}>Weight: </h5>
                  <p className={style.value}>
                    {store.state.breedInfo[0]?.breeds[0].weight.metric} kgs
                  </p>
                </div>
                <div className={style.info_wrapp}>
                  <h5 className={style.title_value}>Life span: </h5>
                  <p className={style.value}>
                    {store.state.breedInfo[0]?.breeds[0].life_span} years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DogInfo;
