import { ADD_PRODUCT, CHANGE_FORM_PRODUCT } from "./action";

const changeForm = (name, value) => {
  return {
    type: CHANGE_FORM_PRODUCT,
    payload: { name, value },
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: { product },
  };
};

export { changeForm, addProduct };
