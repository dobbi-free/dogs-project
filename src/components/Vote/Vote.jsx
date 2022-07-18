import SearchBlock from "../Breeds/Search/SearchBlock";
import common from "../../common-style/Common.module.css";
import style from "./Vote.module.css";
import BackBlock from "../Breeds/BackBlock";
import VoteImage from "./VoteImage";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Vote = () => {
  const [actions, setActions] = useState([]);
  const mobile = useMediaQuery({ maxWidth: 375 });
  const tablet = useMediaQuery({ minWidth: 376 });
  return (
    <div className={common.wrapp}>
      <SearchBlock />
      <div className={common.main_block}>
        <div className={style.panel_wrapp}>
          <BackBlock title={"VOTING"} />
        </div>
        <div className={common.content_block}>
          <VoteImage actions={actions} setActions={setActions} />
        </div>
        <div className={style.result_wrapp}>
          {actions.map((item) => (
            <div key={item.id + item.image_id} className={style.result_item}>
              <div className={style.result_item_wrapp}>
                {tablet && <div className={style.result_date}>{item.date}</div>}
                <p className={style.result_info}>
                  Image ID: <span>{item.image_id}</span> was added to{" "}
                  {item.action}
                </p>
              </div>
              <div className={style.line_wrapp}>
                {mobile && <div className={style.result_date}>{item.date}</div>}
                <img src={item.svg} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vote;
