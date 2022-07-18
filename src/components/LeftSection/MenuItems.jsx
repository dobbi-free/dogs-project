import { NavLink, useLocation } from "react-router-dom";
import menu_img_vote from "../../img/vote-tablemenu_img.svg";
import menu_img_breeds from "../../img/pet-breeds.svg";
import menu_img_gallery from "../../img/images-search.svg";
import style from "./LeftSection.module.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context";

const MenuItems = () => {
  const { store, constants } = useContext(GlobalContext);
  const [state, setState] = useState([
    {
      isActive: false,
      linkTo: "/vote",
      background: style.background_outer_voting,
      src: menu_img_vote,
      name: "VOTE",
      activeClassButton: style.button_active,
      activeClassBg: style.background_outer_voting_active,
    },
    {
      isActive: false,
      linkTo: "/breeds",
      background: style.background_outer_breeds,
      src: menu_img_breeds,
      name: "BREEDS",
      activeClassButton: style.button_active,
      activeClassBg: style.background_outer_breeds_active,
    },
    {
      isActive: false,
      linkTo: "/gallery",
      background: style.background_outer_gallery,
      src: menu_img_gallery,
      name: "GALLERY",
      activeClassButton: style.button_active,
      activeClassBg: style.background_outer_gallery_active,
    },
  ]);

  const location = useLocation();

  const setActive = () => {
    const newArray = state.map((n) =>
      n.linkTo === location.pathname
        ? { ...n, isActive: true }
        : { ...n, isActive: false }
    );
    setState(newArray);
  };

  useEffect(() => {
    setActive();
  }, [location]);

  return (
    <div className={style.menu}>
      {state.map((linkItem, i) => (
        <div
          key={i}
          className={style.menu_block}
          onClick={(e) => {
            store.dispatch({
              type: constants.SHOW_BURGER_MENU,
              showBurgerMenu: false,
            });
          }}
        >
          <NavLink to={linkItem.linkTo}>
            <div
              className={
                linkItem.isActive ? linkItem.activeClassBg : linkItem.background
              }
            >
              <img alt={""} src={linkItem.src} />
            </div>
            <div
              className={
                linkItem.isActive
                  ? linkItem.activeClassButton
                  : style.button_block
              }
            >
              {linkItem.name}
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
