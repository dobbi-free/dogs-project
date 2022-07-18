import { useContext } from "react";
import style from "../Breeds.module.css";
import common from "../../../common-style/Common.module.css";
import BackBlock from "../BackBlock";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../context/context";
import Preloader from "../../Preloader/Preloader";

const SearchResult = () => {
  const { store } = useContext(GlobalContext);

  return (
    <div>
      <div className={style.panel_wrapp}>
        <BackBlock title={"SEARCH"} />
      </div>
      <div className={style.content_block}>
        {store.state.showResult && (
          <p className={style.search_name}>
            Search results for: <span>{store.state.showResult}</span>
          </p>
        )}
        {store.state.isLoading ? (
          <Preloader />
        ) : (
          <div className={common.image_wrapp}>
            {store.state.searchData.map((item) => (
              <NavLink
                to={"/breeds/" + item.breeds[0]?.id}
                key={item.id}
                className={style.image_block}
              >
                <img className={style.img_breeds} src={item.url} alt="" />

                <span className={style.hover_name}>{item.breeds[0]?.name}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
