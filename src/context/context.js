import React, { useReducer } from "react";

const SET_BREEDS_DATA = "SET_BREEDS_DATA";
const UNDO = "UNDO";
const SET_PAST = "SET_PAST";
const SET_BREED_INFO = "SET_BREED_INFO";
const SET_SEARCH_NAME = "SET_SEARCH_NAME";
const SET_FAVORITES_DATA = "SET_FAVORITES_DATA";
const SET_LOADING = "SET_LOADING";
const SET_VOTE_DOG = "SET_VOTE_DOG";
const SET_VOTE_DATA = "SET_VOTE_DATA";
const SET_DISLIKES_DATA = "SET_DISLIKES_DATA";
const SET_SEARCH_DATA = "SET_SEARCH_DATA";
const SET_NOT_FOUND = "SET_NOT_FOUND";
const SET_SHOW_RESULT = "SET_SHOW_RESULT";
const SHOW_BURGER_MENU = "SHOW_BURGER_MENU";

const GlobalContext = React.createContext([{}, () => {}]);

const GlobalProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_BREEDS_DATA:
        return {
          ...state,
          breeds: action.breeds,
        };
      case SET_PAST:
        return {
          ...state,
          past: [...state.past, state.breeds],
        };
      case UNDO:
        return {
          ...state,
          past: state.past.filter(
            (item, index) => index !== state.past.length - 1
          ),
          breeds: [...state.past[state.past.length - 2]],
        };
      case SET_BREED_INFO:
        return {
          ...state,
          breedInfo: action.breedInfo,
        };
      case SET_SEARCH_NAME:
        return {
          ...state,
          searchName: action.searchName,
          searchData: [],
        };
      case SET_FAVORITES_DATA:
        return {
          ...state,
          favorites: action.favorites,
        };
      case SET_VOTE_DATA:
        return {
          ...state,
          voteData: action.voteData,
        };
      case SET_DISLIKES_DATA:
        return {
          ...state,
          dislikes: action.dislikes,
        };
      case SET_LOADING:
        return {
          ...state,
          isLoading: action.isLoading,
        };
      case SET_VOTE_DOG:
        return {
          ...state,
          voteDog: action.voteDog,
        };
      case SET_SEARCH_DATA:
        return {
          ...state,
          searchData: action.searchData,
        };
      case SET_NOT_FOUND:
        return {
          ...state,
          notFound: action.notFound,
        };
      case SET_SHOW_RESULT:
        return {
          ...state,
          showResult: action.showResult,
        };
      case SHOW_BURGER_MENU:
        return {
          ...state,
          showBurgerMenu: action.showBurgerMenu,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    breeds: [],
    searchData: [],
    past: [],
    breedInfo: [],
    favorites: [],
    voteData: [],
    searchName: "",
    showResult: "",
    isLoading: false,
    notFound: false,
    showBurgerMenu: false,
    voteDog: {},
  });

  return (
    <GlobalContext.Provider
      value={{
        store: {
          state,
          dispatch,
        },
        constants: {
          SET_BREEDS_DATA,
          UNDO,
          SET_PAST,
          SET_BREED_INFO,
          SET_SEARCH_NAME,
          SET_FAVORITES_DATA,
          SET_LOADING,
          SET_VOTE_DOG,
          SET_VOTE_DATA,
          SET_DISLIKES_DATA,
          SET_SEARCH_DATA,
          SET_NOT_FOUND,
          SET_SHOW_RESULT,
          SHOW_BURGER_MENU,
        },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
