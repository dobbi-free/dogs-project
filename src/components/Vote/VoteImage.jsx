import { GlobalContext } from "../../context/context";
import { breedsAPI } from "../../api/api";
import { useContext, useEffect } from "react";
import style from "./Vote.module.css";
import PreloaderImage from "../Preloader/PreloaderImage";
import like_svg from "../../img/Vector like.svg";
import dislike_svg from "../../img/Vector (Stroke)dis.svg";
import fav_svg from "../../img/Vector 348 (Stroke)fav.svg";

const VoteImage = ({ actions, setActions }) => {
  const { store, constants } = useContext(GlobalContext);

  const getVoteImg = async () => {
    store.dispatch({ type: constants.SET_LOADING, isLoading: true });
    const limit = 1;
    const data = await breedsAPI.getBreedsData(limit);
    store.dispatch({ type: constants.SET_VOTE_DOG, voteDog: data });
    store.dispatch({ type: constants.SET_LOADING, isLoading: false });
  };

  const likeDislike = async (imageId, vote) => {
    const data = await breedsAPI.vote(imageId, vote);
    if (data.message === "SUCCESS") {
      if (vote === 1) {
        const h = new Date();
        const newObject = {
          date: h.toLocaleTimeString().slice(0, -3),
          image_id: imageId,
          action: "Rating",
          svg: like_svg,
        };
        actions.unshift(newObject);
      } else if (vote === 0) {
        const h = new Date();
        const newObject = {
          date: h.toLocaleTimeString().slice(0, -3),
          image_id: imageId,
          action: "Dislikes",
          svg: dislike_svg,
        };
        actions.unshift(newObject);
      }
      setActions([...actions]);
    }
  };

  const addFavorites = async (imageId) => {
    const data = await breedsAPI.addFavorites(imageId);
    if (data.message === "SUCCESS") {
      const h = new Date();
      const newObject = {
        date: h.toLocaleTimeString().slice(0, -3),
        image_id: imageId,
        action: "Favorites",
        svg: fav_svg,
      };
      actions.unshift(newObject);
      setActions([...actions]);
    } else if (
      data.message ===
      "DUPLICATE_FAVOURITE - favourites are unique for account + image_id + sub_id"
    ) {
      alert("already  favorites");
    }
  };

  useEffect(() => {
    getVoteImg();
  }, [actions]);

  return (
    <div>
      <div className={style.img_block}>
        {store.state.isLoading ? (
          <PreloaderImage />
        ) : (
          <img className={style.img} src={store.state.voteDog[0]?.url} alt="" />
        )}

        <div className={style.actions_wrapp}>
          <button
            onClick={(e) => {
              likeDislike(store.state.voteDog[0].id, 1);
            }}
            className={style.like}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              addFavorites(store.state.voteDog[0].id);
            }}
            className={style.favorite}
          >
            <svg
              width="30"
              height="26"
              viewBox="0 0 30 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              likeDislike(store.state.voteDog[0].id, 0);
            }}
            className={style.dislike}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteImage;
