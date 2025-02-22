import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getNoOfPizzas, getTotalPrice } from "./cartSlice";

function CartOverview() {
  const noOfPizzas = useSelector(getNoOfPizzas);
  const totalPrice = useSelector(getTotalPrice);

  if (noOfPizzas === 0) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>{noOfPizzas} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
