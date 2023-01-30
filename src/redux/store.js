import { combineReducers, compose, legacy_createStore } from "redux";

import productListReducer from "../redux/productListReducer";
import changeFormProductReducer from "../redux/changeFormProductReducer";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureProduct() {
  return legacy_createStore(
    combineReducers({
      productList: productListReducer,
      changeForm: changeFormProductReducer,
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
}

export default configureProduct;
