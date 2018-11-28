import HomeContainer from "../containers/Home";
import AboutContainer from "../containers/About/About";

export const PATHS = Object.freeze({
  INDEX: '/',
  ABOUT: '/about',
  NEXT: '/next',
  LAST: '/last',
  ITEMS: '/items',
  LIFTING: '/lifting',
  ITEM_DETAILS: '/items/:id'
});

export const ROUTES = Object.freeze([
  {
    path: PATHS.INDEX,
    component: HomeContainer
  },
  {
    path: PATHS.ABOUT,
    component: AboutContainer
  }
]);
