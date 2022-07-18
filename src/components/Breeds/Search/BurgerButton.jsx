import style from "../Breeds.module.css";
import { GlobalContext } from "../../../context/context";
import { useContext } from "react";

const BurgerButton = () => {
  const { store, constants } = useContext(GlobalContext);
  return (
    <button
      onClick={() => {
        store.dispatch({
          type: constants.SHOW_BURGER_MENU,
          showBurgerMenu: true,
        });
      }}
      className={style.burger}
    >
      <span className={style.burger_line}></span>
      <span className={style.burger_line}></span>
      <span className={style.burger_line}></span>
    </button>
  );
};

export default BurgerButton;
