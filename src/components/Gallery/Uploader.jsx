import React, { useContext, useEffect, useState } from "react";
import style from "./Gallery.module.css";
import icon from "../../img/Vectorgallery_icon.svg";
import { breedsAPI } from "../../api/api";
import { GlobalContext } from "../../context/context";

const Uploader = () => {
  const { store, constants } = useContext(GlobalContext);
  const [photo, setPhoto] = useState();
  const [photoName, setPhotoName] = useState();
  const [preview, setPreview] = useState();
  const [loadResult, setLoadResult] = useState({
    success: false,
    error: false,
  });
  const [showHide, setShowHide] = useState(true);

  const uploadPhoto = async (photo) => {
    store.dispatch({ type: constants.SET_LOADING, isLoading: true });
    const data = await breedsAPI.uploadPhoto(photo);
    if (data.status === 201) {
      setLoadResult({ ...loadResult, success: true, error: false });
      setPhoto(null);
      setPreview(null);
    } else if (data.status === 400) {
      setLoadResult({ ...loadResult, error: true, success: false });
      setShowHide(false);
    }
    store.dispatch({ type: constants.SET_LOADING, isLoading: false });
  };

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [photo, loadResult, preview]);

  return (
    <div className={style.upload_wrapp}>
      <div
        className={
          !loadResult.error ? style.upload_area : style.upload_area_error
        }
      >
        {preview && (
          <div className={style.preview}>
            <img className={style.img_preview} src={preview} alt="" />
          </div>
        )}
        <input
          className={style.input_upload}
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files.length) {
              setPhoto(e.target.files[0]);
              setPhotoName(e.target.files[0].name);
            }
          }}
          onClick={(e) => {
            setShowHide(true);
            setLoadResult({ ...loadResult, error: false, success: false });
            setPhoto(null);
          }}
        />
        {!preview && (
          <div className={style.desc_wrapp}>
            <img className={style.img_icon} src={icon} alt="" />
            <p className={style.upload_desc}>
              <div>
                <span>Drag here</span> your file or
              </div>
              <div>
                <span>Click here</span> to upload
              </div>
            </p>
          </div>
        )}
      </div>
      {preview ? (
        <p className={style.file_desc}>Image File Name: {photoName}</p>
      ) : (
        <p className={style.file_desc}>No file selected</p>
      )}
      {preview &&
        showHide &&
        (store.state.isLoading ? (
          <div className={style.button_preload}>
            <div className={style.lds_ring}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className={style.uploading}>UPLOADING</p>
          </div>
        ) : (
          <button
            onClick={(e) => {
              uploadPhoto(photo);
            }}
            className={style.button_upload_photo}
          >
            UPLOAD PHOTO
          </button>
        ))}
      {loadResult.success && (
        <div className={style.result_upload}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z"
              fill="#97EAB9"
            />
          </svg>
          <p>Thanks for the Upload - Dog found!</p>
        </div>
      )}
      {loadResult.error && (
        <div className={style.result_upload}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z"
              fill="#FF868E"
            />
          </svg>

          <p>No Dog found - try a different one</p>
        </div>
      )}
    </div>
  );
};

export default Uploader;
