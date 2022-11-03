import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/Actions/fetchcart-actions";
import { uiActions } from "../../store/Slice/ui-Slice";
import Modal from "../Modal/Modal";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

function Products() {
  const dispatch = useDispatch();
  const manoProducts = useSelector((state) => state.ui.manoProducts);
  const show = useSelector((state) => state.ui.show);
  const img = useSelector((state) => state.ui.img);
  const status = useSelector((state) => state.ui.notifications.status);
  const message = useSelector((state) => state.ui.notifications.message);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const toggleButton = () => {
    dispatch(uiActions.toggle());
  };

  const listItem = manoProducts.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      title={product.title}
      image={
        product?.images[0]?.large
          ? product?.images[0]?.large
          : "https://t4.ftcdn.net/jpg/04/00/24/31/240_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
      }
    />
  ));

  const modal = (
    <Modal>
      <div className={classes.header}>
        {img ? (
          <img src={img} alt="New Product" className={classes.ProductImage} />
        ) : (
          <p className={classes.error}>No Image Available</p>
        )}
      </div>
    </Modal>
  );

  if (status === "pending") {
    return (
      <section className={classes.loading}>
        <h1>{message}</h1>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className={classes.error}>
        <h1>{message}</h1>
      </section>
    );
  }

  return (
    <ul className={classes.productList} onClick={toggleButton}>
      {!show && listItem}
      {show && modal}
    </ul>
  );
}

export default Products;
