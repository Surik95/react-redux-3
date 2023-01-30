import { CHANGE_FORM_PRODUCT } from "./action";

const initialState = {
  nameProduct: "",
  price: "",
  srcImage: "",
  onSale: "0",
  sale: "",
};

const changeFormProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_PRODUCT:
      if (action.payload.name === "clear form") {
        return initialState;
      }
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default changeFormProductReducer;
