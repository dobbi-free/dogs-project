import style from "../Breeds.module.css";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import likes_icon from "../../../img/Vector (Stroke)like.svg";
import favorites_icon from "../../../img/Vector 348 (Stroke).svg";
import dislikes_icon from "../../../img/Vector (Stroke) (1).svg";

const BlockNav = () => {
  const [state, setState] = useState([
    {
      isActive: false,
      linkTo: "/rating/1",
      src: likes_icon,
    },
    {
      isActive: false,
      linkTo: "/favorites",
      src: favorites_icon,
    },
    {
      isActive: false,
      linkTo: "/rating/0",
      src: dislikes_icon,
    },
  ]);

  const location = useLocation();

  const setActive = () => {
    const newArray = state.map((n) =>
      n.linkTo === location.pathname
        ? { ...n, isActive: true }
        : {
            ...n,
            isActive: false,
          }
    );
    setState(newArray);
  };

  useEffect(() => {
    setActive();
  }, [location]);

  return (
    <div className={style.links_block}>
      {state.map((item, i) => (
        <NavLink
          key={i}
          className={item.isActive ? style.link_active : style.links_item}
          to={item.linkTo}
        >
          <img
            className={item.isActive ? style.links_svg_active : null}
            src={item.src}
            alt=""
          />
        </NavLink>
      ))}
    </div>
  );
};

export default BlockNav;
