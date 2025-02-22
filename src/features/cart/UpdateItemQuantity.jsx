import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { changeQuantity, getPizzaQuantity, removeFromCart } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  const pizzaQuantity = useSelector(getPizzaQuantity(pizzaId));

  function handleDecreaseQuantity() {
    if (pizzaQuantity > 1) {
      dispatch(changeQuantity({ id: pizzaId, quantity: pizzaQuantity - 1 }));
    } else {
      dispatch(removeFromCart({ id: pizzaId }));
    }
  }

  function handleIncreaseQuantity() {
    dispatch(changeQuantity({ id: pizzaId, quantity: pizzaQuantity + 1 }));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={handleIncreaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
