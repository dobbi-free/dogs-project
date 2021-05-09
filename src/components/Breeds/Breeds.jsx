import common from "../../common-style/Common.module.css";
import { Route, Switch } from "react-router-dom";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/context";
import { breedsAPI } from "../../api/api";
import FindBreeds from "./FindBreeds";
import DogInfo from "./DogInfo/DogInfo";
import NotItemFound from "../common/NotItemFound";
import SearchResult from "./Search/SearchResult";
import SearchBlock from "./Search/SearchBlock";

const Breeds = () => {
  const { store, constants } = useContext(GlobalContext);

  const [notFound, setNotFound] = useState(false);

  const [breedId, setBreedId] = useState({
    id: "",
  });

  const getBreedsData = async (limit, breedId) => {
    store.dispatch({ type: constants.SET_LOADING, isLoading: true });
    const data = await breedsAPI.getBreedsData(limit, breedId);
    store.dispatch({ type: constants.SET_BREEDS_DATA, breeds: data });
    store.dispatch({ type: constants.SET_PAST });
    store.dispatch({ type: constants.SET_LOADING, isLoading: false });
  };

  return (
    <div className={common.wrapp}>
      <SearchBlock />
      <div className={common.main_block}>
        <Switch>
          <Route
            exact
            path="/breeds"
            render={() => (
              <FindBreeds
                notFound={notFound}
                past={store.state.past}
                getBreedsData={getBreedsData}
                breedId={breedId}
                setBreedId={setBreedId}
                isLoading={store.state.isLoading}
              />
            )}
          />
          <Route path="/breeds/undefined" render={() => <NotItemFound />} />
          <Route
            path="/breeds/search"
            render={() => (
              <SearchResult
                setNotFound={setNotFound}
                notFound={notFound}
                name={store.state.searchName}
              />
            )}
          />
          <Route path="/breeds/:breedId" render={() => <DogInfo />} />
        </Switch>
        {store.state.notFound && <NotItemFound />}
      </div>
    </div>
  );
};

export default Breeds;
