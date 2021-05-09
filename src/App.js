import "./App.css";
import LeftSection from "./components/LeftSection/LeftSection";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Breeds from "./components/Breeds/Breeds";
import Gallery from "./components/Gallery/Gallery";
import Favorites from "./components/Favorites/Favorites";
import Vote from "./components/Vote/Vote";
import LikesDislikes from "./components/Likes/LikesDislikes";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

const App = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="main_wrapp">
      <div className="left_wrapp">
        {!isTablet && <LeftSection />}
        {isTablet && <BurgerMenu />}
        {isTablet && (
          <Switch>
            <Route exact path="/" render={() => <LeftSection />} />
            <Route path="/breeds" render={() => <Breeds />} />
            <Route path="/gallery" render={() => <Gallery />} />
            <Route path="/vote" render={() => <Vote />} />
            <Route path="/favorites" render={() => <Favorites />} />
            <Route
              path="/likes"
              render={() => <LikesDislikes title={"LIKES"} likeDislike={1} />}
            />
            <Route
              path="/dislikes"
              render={() => (
                <LikesDislikes title={"DISLIKES"} likeDislike={0} />
              )}
            />
          </Switch>
        )}
      </div>
      <div className="right_section">
        <Route exact path="/" render={() => <Home />} />
        <Route path="/breeds" render={() => <Breeds />} />
        <Route path="/gallery" render={() => <Gallery />} />
        <Route path="/vote" render={() => <Vote />} />
        <Route path="/favorites" render={() => <Favorites />} />
        <Route
          path="/likes"
          render={() => <LikesDislikes title={"LIKES"} likeDislike={1} />}
        />
        <Route
          path="/dislikes"
          render={() => <LikesDislikes title={"DISLIKES"} likeDislike={0} />}
        />
      </div>
    </div>
  );
};

export default App;
