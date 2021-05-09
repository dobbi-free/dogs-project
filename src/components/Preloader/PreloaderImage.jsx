import style from "./PreloaderImage.module.css";

const PreloaderImage = () => {
    return (
        <div className={style.preloader_wrapp}>
            <div className={style.lds_circle}>
                <div></div>
            </div>
        </div>

    );
};

export default PreloaderImage;
