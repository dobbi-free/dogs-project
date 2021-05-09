import { NavLink, useLocation } from "react-router-dom";
import style from "./LeftSection.module.css";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context";

const MenuButtons = () => {
    const { store, constants } = useContext(GlobalContext);
    const [state, setState] = useState([
        {
            isActive: false,
            linkTo: "/vote",
            name: "VOTE",
            activeClassButton: style.button_active,
        },
        {
            isActive: false,
            linkTo: "/breeds",
            name: "BREEDS",
            activeClassButton: style.button_active,
        },
        {
            isActive: false,
            linkTo: "/gallery",
            name: "GALLERY",
            activeClassButton: style.button_active,
        },
    ]);

    const location = useLocation()

    const setActive = () => {
        const newArray = state.map(n => n.linkTo === location.pathname ? {...n,isActive: true} : {...n,isActive:false})
        setState(newArray)
    }

    useEffect(() => {
        setActive()
    }, [location]);
    return(
        <div className={style.mobile_menu}>
            {state.map((linkItem,i) => (
                <div key={i} className={style.menu_block} onClick={e=>{
                    store.dispatch({type:constants.SHOW_BURGER_MENU,showBurgerMenu: false})
                }}>
                    <NavLink to={linkItem.linkTo}>
                        <div
                            className={
                                linkItem.isActive ? linkItem.activeClassButton : style.button_block
                            }
                        >
                            {linkItem.name}
                        </div>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default MenuButtons;