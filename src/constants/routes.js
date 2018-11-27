import HomeContainer from "../containers/Home";
import AboutContainer from "../containers/About/About";

export const PATHS = Object.freeze({
  INDEX: '/',
  ABOUT: '/about',
  ITEMS: '/items',
  ITEM_DETAILS: '/items/:id',
  DASH1:'/dashboard1',
  DASH2:'/dashboard2'
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
