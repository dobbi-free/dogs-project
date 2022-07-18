import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Breeds from "./components/Breeds/Breeds";
import Gallery from "./components/Gallery/Gallery";
import Favorites from "./components/Favorites/Favorites";
import Vote from "./components/Vote/Vote";
import LikesDislikes from "./components/Rating/LikesDislikes";
import Layout from "./components/Layout/Layout";
import FindBreeds from "./components/Breeds/FindBreeds";
import NotItemFound from "./components/common/NotItemFound";
import SearchResult from "./components/Breeds/Search/SearchResult";
import DogInfo from "./components/Breeds/DogInfo/DogInfo";
import Rating from "./components/Rating/Rating";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/breeds" element={<Breeds />}>
            <Route index element={<FindBreeds />} />
            <Route path="*" element={<NotItemFound />} />
            <Route path="search" element={<SearchResult />} />
            <Route path=":breedId" element={<DogInfo />} />
          </Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/rating" element={<Rating />}>
            <Route path=":rating" element={<LikesDislikes />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
