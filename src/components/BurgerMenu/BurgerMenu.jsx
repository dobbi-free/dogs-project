import style from "../../components/LeftSection/LeftSection.module.css";
import MenuItems from "../LeftSection/MenuItems";
import { GlobalContext } from "../../context/context";
import { useContext } from "react";
import MenuButtons from "../LeftSection/MenuButtons";
import { useMediaQuery } from "react-responsive";

const BurgerMenu = () => {
  const { store, constants } = useContext(GlobalContext);
  const tablet = useMediaQuery({
    minWidth: 586,
    maxWidth: 768,
  });
  const mobile = useMediaQuery({ maxWidth: 585 });
  return (
    <div
      className={
        store.state.showBurgerMenu
          ? style.burger_menu_wrapp_active
          : style.burger_menu_wrapp
      }
    >
      <button
        onClick={(e) => {
          store.dispatch({
            type: constants.SHOW_BURGER_MENU,
            showBurgerMenu: false,
          });
        }}
        className={style.close}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5859 12.9996L0.292969 1.70669L1.70718 0.29248L13.0001 11.5854L24.293 0.29248L25.7072 1.70669L14.4143 12.9996L25.7072 24.2925L24.293 25.7067L13.0001 14.4138L1.70718 25.7067L0.292969 24.2925L11.5859 12.9996Z"
            fill="#FF868E"
          />
        </svg>
      </button>
      <div className={style.tablet_menu}>{tablet && <MenuItems />}</div>
      {mobile && <MenuButtons />}
    </div>
  );
};

export default BurgerMenu;
