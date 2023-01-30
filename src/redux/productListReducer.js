import { nanoid } from "nanoid";
import { ADD_PRODUCT } from "./action";

const initialState = [
  {
    nameProduct:
      "Ночник-проектор Star Master Звездное небо 012-1361, 2.6 Вт, цвет арматуры: розовый, цвет плафона: бесцветный",
    price: "799",
    srcImage:
      "http://avatars.mds.yandex.net/get-mpic/5290046/img_id4442904032204660050.jpeg/200x200",
    onSale: "1",
    sale: "56",
  },
  {
    nameProduct: "Смартфон Xiaomi Redmi Note 11 Pro 8 128Gb RU Graphite Gray",
    price: "29471",
    srcImage:
      " https://avatars.mds.yandex.net/get-marketpic/169403/pic21af16c5e6820ab5d5e53dea3db0ea9c/200x200",
    onSale: undefined,
    sale: "",
  },
];

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { price, sale, onSale, nameProduct, srcImage } =
        action.payload.product;
      return [
        ...state,
        {
          nameProduct: nameProduct,
          srcImage: srcImage,
          id: nanoid(),
          price: Number(price),
          sale: sale === "" ? undefined : Number(sale),
          onSale: Boolean(Number(onSale)),
        },
      ];
    default:
      return state;
  }
};

export default productListReducer;
