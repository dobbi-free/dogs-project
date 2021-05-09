import style from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.preloader_wrapp}>
      <div className={style.lds_facebook}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
