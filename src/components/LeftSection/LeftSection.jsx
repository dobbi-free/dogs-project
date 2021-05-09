import { NavLink } from "react-router-dom";
import style from "./LeftSection.module.css";
import MenuItems from "./MenuItems";
import { useMediaQuery } from "react-responsive";
import MenuButtons from "./MenuButtons";

const LeftSection = () => {
  const tablet = useMediaQuery({
    minWidth: 586,
  });
  const mobile = useMediaQuery({ maxWidth: 585 });
  return (
    <div className={style.left_section}>
      <div className={style.logo}>
        <NavLink to={"/"}>
          <svg
            width="107"
            height="24"
            viewBox="0 0 107 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.84067 12.4575C7.84067 9.90766 9.90775 7.84058 12.4576 7.84058L19.3831 7.84058C21.9329 7.84058 24 9.90766 24 12.4575C24 15.0074 21.9329 17.0745 19.3831 17.0745H12.4576C9.90775 17.0745 7.84067 15.0074 7.84067 12.4575Z"
              fill="#FF868E"
            />
            <path
              d="M12.4576 24C9.90775 24 7.84067 21.9329 7.84067 19.383L7.84067 12.4576C7.84067 9.90772 9.90775 7.84063 12.4576 7.84063C15.0075 7.84063 17.0746 9.90772 17.0746 12.4576V19.383C17.0746 21.9329 15.0075 24 12.4576 24Z"
              fill="#FF868E"
            />
            <path
              d="M11.5424 2.8856C11.5424 4.47927 10.2505 5.7712 8.65678 5.7712C7.06311 5.7712 5.77118 4.47927 5.77118 2.8856C5.77118 1.29193 7.06311 0 8.65678 0C10.2505 0 11.5424 1.29193 11.5424 2.8856Z"
              fill="#FF868E"
            />
            <path
              d="M5.7712 16.7364C5.7712 18.3301 4.47927 19.622 2.8856 19.622C1.29193 19.622 0 18.3301 0 16.7364C0 15.1428 1.29193 13.8508 2.8856 13.8508C4.47927 13.8508 5.7712 15.1428 5.7712 16.7364Z"
              fill="#FF868E"
            />
            <path
              d="M19.6221 2.8856C19.6221 4.47927 18.3302 5.7712 16.7365 5.7712C15.1428 5.7712 13.8509 4.47927 13.8509 2.8856C13.8509 1.29193 15.1428 0 16.7365 0C18.3302 0 19.6221 1.29193 19.6221 2.8856Z"
              fill="#FF868E"
            />
            <path
              d="M5.7712 8.65684C5.7712 10.2505 4.47927 11.5424 2.8856 11.5424C1.29193 11.5424 0 10.2505 0 8.65684C0 7.06317 1.29193 5.77124 2.8856 5.77124C4.47927 5.77124 5.7712 7.06317 5.7712 8.65684Z"
              fill="#FF868E"
            />
            <path
              d="M31.8944 18.8001V6.4353H37.6928C38.6656 6.4353 39.4592 6.6209 40.0736 6.9921C40.7008 7.3633 41.168 7.8689 41.4752 8.5089C41.7824 9.1489 41.936 9.8785 41.936 10.6977C41.936 11.5297 41.7568 12.2657 41.3984 12.9057C41.0528 13.5457 40.5536 14.0449 39.9008 14.4033C39.2608 14.7489 38.4992 14.9217 37.616 14.9217H34.4864V18.8001H31.8944ZM34.4864 12.8673H37.0784C37.8208 12.8673 38.3776 12.6753 38.7488 12.2913C39.1328 11.8945 39.3248 11.3633 39.3248 10.6977C39.3248 9.9809 39.1456 9.4369 38.7872 9.0657C38.4288 8.6817 37.8912 8.4897 37.1744 8.4897H34.4864V12.8673Z"
              fill="#1D1D1D"
            />
            <path
              d="M48.1118 18.9921C46.5374 18.9921 45.2894 18.6017 44.3678 17.8209C43.4462 17.0273 42.9854 15.8305 42.9854 14.2305C42.9854 12.7841 43.3694 11.6385 44.1374 10.7937C44.9182 9.9361 46.0766 9.5073 47.6126 9.5073C49.0206 9.5073 50.0958 9.8785 50.8382 10.6209C51.5934 11.3505 51.971 12.3105 51.971 13.5009V15.1521L45.3854 15.1521C45.5262 15.8817 45.859 16.3809 46.3838 16.6497C46.9214 16.9185 47.6766 17.0529 48.6494 17.0529C49.1358 17.0529 49.6286 17.0081 50.1278 16.9185C50.6398 16.8289 51.075 16.7137 51.4334 16.5729V18.4161C51.011 18.6081 50.5182 18.7489 49.955 18.8385C49.3918 18.9409 48.7774 18.9921 48.1118 18.9921ZM45.3854 13.5585H49.7054V13.0593C49.7054 12.5345 49.5518 12.1249 49.2446 11.8305C48.9374 11.5233 48.419 11.3697 47.6894 11.3697C46.8318 11.3697 46.2302 11.5425 45.8846 11.8881C45.5518 12.2337 45.3854 12.7905 45.3854 13.5585Z"
              fill="#1D1D1D"
            />
            <path
              d="M57.3853 18.9921C56.3357 18.9921 55.5549 18.7169 55.0429 18.1665C54.5437 17.6161 54.2941 16.8673 54.2941 15.9201V11.6961H53.0077V9.6993H54.2941V7.7409L56.8861 6.9729V9.6993H59.1901L59.0365 11.6961H56.8861V15.7473C56.8861 16.2465 57.0013 16.5921 57.2317 16.7841C57.4621 16.9633 57.8205 17.0529 58.3069 17.0529C58.6653 17.0529 59.0365 16.9889 59.4205 16.8609V18.6465C59.1389 18.7617 58.8317 18.8449 58.4989 18.8961C58.1661 18.9601 57.7949 18.9921 57.3853 18.9921Z"
              fill="#1D1D1D"
            />
            <path
              d="M63.9571 18.9921C63.2787 18.9921 62.6323 18.9409 62.0179 18.8385C61.4035 18.7489 60.9107 18.6337 60.5395 18.4929V16.3425C60.9875 16.5217 61.4931 16.6625 62.0563 16.7649C62.6195 16.8545 63.1379 16.8993 63.6115 16.8993C64.2515 16.8993 64.6995 16.8609 64.9555 16.7841C65.2243 16.7073 65.3587 16.5345 65.3587 16.2657C65.3587 15.9585 65.1539 15.7345 64.7443 15.5937C64.3475 15.4529 63.7523 15.2545 62.9587 14.9985C62.1267 14.7169 61.4867 14.3777 61.0387 13.9809C60.5907 13.5841 60.3667 12.9953 60.3667 12.2145C60.3667 11.3441 60.6803 10.6785 61.3075 10.2177C61.9475 9.7441 62.9715 9.5073 64.3795 9.5073C64.9427 9.5073 65.4739 9.5521 65.9731 9.6417C66.4723 9.7185 66.8947 9.8145 67.2403 9.9297V12.0609C66.8947 11.8945 66.4979 11.7729 66.0499 11.6961C65.6019 11.6065 65.1859 11.5617 64.8019 11.5617C64.2515 11.5617 63.8099 11.6001 63.4771 11.6769C63.1571 11.7537 62.9971 11.9201 62.9971 12.1761C62.9971 12.4577 63.1699 12.6561 63.5155 12.7713C63.8739 12.8865 64.4243 13.0593 65.1667 13.2897C65.8963 13.5073 66.4659 13.7441 66.8755 14.0001C67.2851 14.2561 67.5731 14.5633 67.7395 14.9217C67.9059 15.2673 67.9891 15.7025 67.9891 16.2273C67.9891 18.0705 66.6451 18.9921 63.9571 18.9921Z"
              fill="#1D1D1D"
            />
            <path
              d="M69.7882 18.8001V6.4353L75.5866 6.4353C76.5594 6.4353 77.353 6.6209 77.9674 6.9921C78.5946 7.3633 79.0618 7.8689 79.369 8.5089C79.6762 9.1489 79.8298 9.8785 79.8298 10.6977C79.8298 11.5297 79.6506 12.2657 79.2922 12.9057C78.9466 13.5457 78.4474 14.0449 77.7946 14.4033C77.1546 14.7489 76.393 14.9217 75.5098 14.9217H72.3802V18.8001H69.7882ZM72.3802 12.8673H74.9722C75.7146 12.8673 76.2714 12.6753 76.6426 12.2913C77.0266 11.8945 77.2186 11.3633 77.2186 10.6977C77.2186 9.9809 77.0394 9.4369 76.681 9.0657C76.3226 8.6817 75.785 8.4897 75.0682 8.4897H72.3802V12.8673Z"
              fill="#1D1D1D"
            />
            <path
              d="M83.749 18.9921C83.173 18.9921 82.6354 18.8897 82.1362 18.6849C81.6498 18.4673 81.253 18.1537 80.9458 17.7441C80.6514 17.3217 80.5042 16.7969 80.5042 16.1697C80.5042 15.2737 80.8178 14.5569 81.445 14.0193C82.085 13.4817 83.0258 13.2129 84.2674 13.2129H86.9554V12.9633C86.9554 12.4001 86.7954 12.0033 86.4754 11.7729C86.1682 11.5425 85.541 11.4273 84.5938 11.4273C83.557 11.4273 82.5586 11.5873 81.5986 11.9073V10.0833C82.021 9.9169 82.533 9.7825 83.1346 9.6801C83.749 9.5649 84.4146 9.5073 85.1314 9.5073C86.501 9.5073 87.557 9.7889 88.2994 10.3521C89.0546 10.9025 89.4322 11.7921 89.4322 13.0209V18.8001H87.1858L87.0514 17.9745C86.693 18.2945 86.2514 18.5441 85.7266 18.7233C85.2018 18.9025 84.5426 18.9921 83.749 18.9921ZM84.4594 17.2833C85.0354 17.2833 85.5346 17.1873 85.957 16.9953C86.3794 16.8033 86.7122 16.5601 86.9554 16.2657V14.8257H84.325C83.3138 14.8257 82.8082 15.2417 82.8082 16.0737C82.8082 16.8801 83.3586 17.2833 84.4594 17.2833Z"
              fill="#1D1D1D"
            />
            <path
              d="M93.0479 18.8001L90.6479 9.6993H93.2399L94.6223 15.6129L96.1391 10.8705V9.6993H98.1167L99.8447 15.6129L101.189 9.6993H103.762L101.381 18.8001H98.9999L97.2527 13.4817L95.4671 18.8001H93.0479Z"
              fill="#1D1D1D"
            />
          </svg>
        </NavLink>
      </div>
      <h1 className={style.title}>Hi intern!</h1>
      <p className={style.subtitle}>Welcome to MSI 2021 Front-end test</p>
      <h3 className={style.menu_title}>Lets start using The Dogs API</h3>
      {tablet && <MenuItems />}
      {mobile && <MenuButtons />}
    </div>
  );
};

export default LeftSection;