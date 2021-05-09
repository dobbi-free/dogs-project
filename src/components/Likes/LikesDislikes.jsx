import SearchBlock from "../Breeds/Search/SearchBlock";
import common from "../../common-style/Common.module.css";
import style from "../Breeds/Breeds.module.css";
import BackBlock from "../Breeds/BackBlock";
import Preloader from "../Preloader/Preloader";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import { breedsAPI } from "../../api/api";
import NotItemFound from "../common/NotItemFound";

const LikesDislikes = ({ likeDislike, title }) => {
  const { store, constants } = useContext(GlobalContext);
  const getVote = async () => {
    store.dispatch({ type: constants.SET_LOADING, isLoading: true });
    store.dispatch({ type: constants.SET_VOTE_DATA, voteData: [] });
    const data = await breedsAPI.getVote();
    const newData = data.filter((item) => item.value === likeDislike);
    if (newData.length <= 0) {
      store.dispatch({ type: constants.SET_NOT_FOUND, notFound: true });
    } else {
      Promise.all(
        newData.map((item) => breedsAPI.getImage(item.image_id))
      ).then((value) => {
        store.dispatch({ type: constants.SET_VOTE_DATA, voteData: value });
      });
      store.dispatch({ type: constants.SET_NOT_FOUND, notFound: false });
    }

    store.dispatch({ type: constants.SET_LOADING, isLoading: false });
  };
  useEffect(() => {
    getVote();
  }, []);
  return (
    <div className={common.wrapp}>
      <SearchBlock />
      <div className={common.main_block}>
        <div className={style.panel_wrapp}>
          <BackBlock title={title} />
        </div>
        <div className={style.content_block}>
          {store.state.isLoading ? (
            <Preloader />
          ) : (
            <div className={common.image_wrapp}>
              {store.state.voteData.map((item) => (
                <div key={item.id} className={style.image_block}>
                  <img className={style.img_breeds} src={item.url} alt="" />

                  <span className={style.hover_name}></span>
                </div>
              ))}
            </div>
          )}
          {store.state.notFound && <NotItemFound />}
        </div>
      </div>
    </div>
  );
};

export default LikesDislikes;
