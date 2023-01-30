import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeForm, addProduct } from "../redux/dispatchFunc";

export default function FormCard() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.changeForm);
  debugger;
  const changeFormItem = (e) => {
    const { name, value } = e.target;
    dispatch(changeForm(name, value));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addProduct(form));
    dispatch(changeForm("clear form"));
  };
  return (
    <form onSubmit={submitForm} className="formCard">
      <label className="label-iput-form">
        Введите название продукта
        <input
          type="text"
          name="nameProduct"
          value={form.nameProduct}
          onChange={changeFormItem}
          required
        />
      </label>
      <label className="label-iput-form">
        Введите путь к изображению товара
        <input
          type="text"
          name="srcImage"
          value={form.srcImage}
          onChange={changeFormItem}
          required
        />
      </label>
      <label className="label-iput-form">
        Введите цену товара
        <input
          type="text"
          name="price"
          value={form.price}
          onChange={changeFormItem}
          required
        />
      </label>
      <label className="label-iput-form">
        Будет скидка?
        <div className="radioButton-block">
          <label>
            ДА!
            <input
              type="radio"
              name="onSale"
              value="1"
              onChange={changeFormItem}
              checked={form.onSale === "1" ? true : false}
            />
          </label>
          <label>
            НЕТ(
            <input
              type="radio"
              name="onSale"
              value="0"
              onChange={changeFormItem}
              checked={form.onSale === "0" ? true : false}
            />
          </label>
        </div>
      </label>
      <label className="label-iput-form">
        Введите размер скидки
        <input
          type="text"
          name="sale"
          value={form.sale}
          onChange={changeFormItem}
          disabled={!Boolean(Number(form.onSale))}
          required={Boolean(Number(form.onSale))}
        />
      </label>
      <button className="btn-form">Добавить!</button>
    </form>
  );
}
