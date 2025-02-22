import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeFromCart } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    console.log("DeleteItem: ", pizzaId);
    dispatch(removeFromCart({id: pizzaId}));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem
