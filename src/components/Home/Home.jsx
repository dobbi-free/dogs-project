import style from "./Home.module.css";
import background from "../../img/girl-and-pet.svg";

const Home = () => {
  return (
    <div className={style.wrapp}>
      <div className={style.background}>
        <img className={style.img} src={background} alt={""} />
      </div>
    </div>
  );
};

export default Home;
