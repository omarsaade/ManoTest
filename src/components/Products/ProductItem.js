import { useDispatch } from "react-redux";
import { uiActions } from "../../store/Slice/ui-Slice";
import classes from "./ProductItem.module.css";

function ProductItem(props) {
  const dispatch = useDispatch();

  const sendImageUrl = () => {
    dispatch(uiActions.getData(props.image));
  };
  return (
    <li className={classes.listItem} onClick={sendImageUrl}>
      <p>{props.title}</p>
    </li>
  );
}

export default ProductItem;
