import style from "./Gallery.module.css";
import React from "react";
import Uploader from "./Uploader";

const UploadPhoto = ({ setModalMode }) => {
  return (
    <div className={style.modal_wrapp}>
      <div className={style.modal_block}>
        <div className={style.wrapp_close}>
          <button
            onClick={(e) => {
              setModalMode(false);
            }}
            className={style.close}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.05691 8.99999L0.52832 1.4714L1.47113 0.528587L8.99972 8.05718L16.5283 0.528587L17.4711 1.4714L9.94253 8.99999L17.4711 16.5286L16.5283 17.4714L8.99972 9.9428L1.47113 17.4714L0.52832 16.5286L8.05691 8.99999Z"
                fill="#FF868E"
              />
            </svg>
          </button>
        </div>
        <h3 className={style.modal_title}>Upload a .jpg or .png Dog Image</h3>
        <p className={style.modal_desc}>
          Any uploads must comply with the{" "}
          <a href="https://www.thedogapi.com/privacy">upload guidelines</a> or
          face deletion.
        </p>
        <Uploader setModalMode={setModalMode} />
      </div>
    </div>
  );
};

export default UploadPhoto;
